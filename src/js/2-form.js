const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

function populateForm() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';

      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
  }
}

populateForm();

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
