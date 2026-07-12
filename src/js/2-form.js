// 1. Знаходимо вже існуючу форму в DOM
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 2. Ініціалізуємо об'єкт стану
const formData = {
  email: '',
  message: '',
};

// 3. Функція заповнення полей із localStorage при завантаженні сторінки
function populateForm() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Заповнюємо об'єкт стану та поля форми
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';

      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
  }
}

// Запускаємо перевірку сховища
populateForm();

// 4. Делегування події input на формі
form.addEventListener('input', event => {
  const { name, value } = event.target;

  // Записуємо значення в об'єкт без пробілів по краях (trim)
  formData[name] = value.trim();

  // Сохраняємо оновлений об'єкт в локальне сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 5. Обробка відправки форми (submit)
form.addEventListener('submit', event => {
  event.preventDefault();

  // Валідація: перевіряємо, щоб обидва поля були заповнені
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Виводимо дані у консоль
  console.log('Submitted Data:', formData);

  // Повна очистка хранилища, об'єкта стану та полей форми
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
