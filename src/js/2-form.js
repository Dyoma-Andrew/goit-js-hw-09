// 1. Находим контейнер и динамически добавляем в него разметку формы
const container = document.querySelector('.container');

const formMarkup = `
  <form class="feedback-form" autocomplete="off">
    <label class="form-label">
      Email
      <input class="form-input" type="email" name="email" autofocus />
    </label>
    <label class="form-label">
      Message
      <textarea class="form-textarea" name="message" rows="8"></textarea>
    </label>
    <button class="form-btn" type="submit">Submit</button>
  </form>
`;

container.innerHTML = formMarkup;

// 2. Объявляем переменные для работы с формой после её создания
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

// 3. Функция заполнения полей из localStorage при загрузке страницы
function populateForm() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Заполняем объект состояния и поля формы
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';

      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
  }
}

// Запускаем проверку хранилища
populateForm();

// 4. Делегирование события input на форме
form.addEventListener('input', event => {
  const { name, value } = event.target;

  // Записываем значение в объект без пробелов по краям (trim)
  formData[name] = value.trim();

  // Сохраняем обновленный объект в локальное хранилище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 5. Обработка отправки формы (submit)
form.addEventListener('submit', event => {
  event.preventDefault();

  // Валидация: проверяем, чтобы оба поля были заполнены
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Выводим данные в консоль
  console.log('Submitted Data:', formData);

  // Полная очистка хранилища, объекта состояния и полей формы
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
