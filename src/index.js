const form = document.form;
const nameInput = document.form.name;
const emailInput = document.form.email;
const numberInput = document.form.number;
const messageInput = document.form.message;
const invalidText = document.querySelectorAll('.invalid-text');

const buttonPopup = document.getElementById('button-open-popup');
const popup = document.querySelector('.popup');
const loader = document.getElementById('loader');
const successText = document.querySelector('.success-text');
const errorText = document.querySelector('.error-text');

// eslint-disable-next-line no-unused-vars
let validInput;

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

  loader.style.display = 'block';
  errorText.innerHTML = '';
  successText.innerHTML = '';

  const formData = new FormData(e.target);

  fetch('http://localhost:9090/api/registration', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.status === 'error') {
        errorText.innerHTML = 'Произошла ошибка, попробуйте еще раз!';
      } else if (result.status === 'success') {
        successText.innerHTML = 'Ваша заявка успешно отправлена!';
        form.reset();
      }
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

buttonPopup.onclick = () => {
  popup.classList.toggle('open-popup');
  document.body.classList.toggle('fixed-window');
};

document.onclick = (e) => {
  if (!e.target.closest('#button-open-popup') && !e.target.closest('.popup')) {
    popup.classList.remove('open-popup');
    document.body.classList.remove('fixed-window');
  }
};
