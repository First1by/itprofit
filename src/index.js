import btnEventHandlers from './popup';
import Inputmask from 'inputmask';

const form = document.form;
const nameInput = document.form.name;
const emailInput = document.form.email;
const numberInput = document.form.phone;
const messageInput = document.form.message;
const invalidText = document.querySelectorAll('.invalid-text');

const loader = document.getElementById('loader');
const stateText = document.querySelector('.state-text');

btnEventHandlers();

// Validation
let validInput;
let im = new Inputmask({ mask: '+375-99-999-99-99' });
im.mask(numberInput);

const validateEmail = (email) => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  return regex.test(email);
};

const validateEmptyInput = () => {
  validInput = true;
  for (let i = 0; i < form.length - 1; i++) {
    if (!form[i].value) {
      form[i].classList.add('invalid');
      invalidText[i].innerHTML = 'Заполните это поле';
      validInput = false;
    }
  }
};

const reset = () => {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].classList.remove('invalid');
    invalidText[i].innerHTML = '';
    validInput = true;
  }
};

form.onsubmit = (e) => {
  e.preventDefault();
  reset();
  validateEmptyInput();

  if (!nameInput.value || !emailInput.value || !numberInput.value || !messageInput.value) return;
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('invalid');
    invalidText[1].innerHTML = 'Неккоректный Email';
    return;
  }

  isLoading('block');
  resultTextRequest('');

  async function submitForm() {
    const response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      body: new FormData(form),
    });

    const result = await response.json();
    if (result.status === 'error') {
      resultTextRequest('Произошла ошибка, попробуйте еще раз!', '#ff0000');
    } else if (result.status === 'success') {
      resultTextRequest('Ваша заявка успешно отправлена!', '#adff2f');
      form.reset();
    }
  }
  submitForm().finally(isLoading('none'));
};

// Result text after submit

function resultTextRequest(state, colorText) {
  stateText.innerHTML = state;
  stateText.style.color = `${colorText}`;
}

function isLoading(display) {
  loader.style.display = display;
}
