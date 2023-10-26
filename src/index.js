const form = document.form;
const nameInput = document.form.name;
const emailInput = document.form.email;
const numberInput = document.form.number;
const messageInput = document.form.message;
const invalidText = document.querySelectorAll('.invalid-text');

let validInput;

const validateEmail = (email) => {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return regex.test(email);
};

const validateEmptyInput = () => {
  validInput = true;
  for (let i = 0; i < form.length - 1; i++) {
    if (!form[i].value) {
      form[i].classList.add('invalid');
      invalidText[i].innerHTML = "Заполните это поле";
      validInput = false;
    }
  }
}

const reset = () => {
  for (let i = 0; i < form.length - 1; i++) {
      form[i].classList.remove('invalid');
      invalidText[i].innerHTML = "";
      validInput = true;
    }
}

form.onsubmit = (e) => {
  e.preventDefault();
  reset();
  validateEmptyInput();

  if (!nameInput.value || !emailInput.value || !numberInput.value || !messageInput.value) return;
  if (!validateEmail(emailInput.value)){
    emailInput.classList.add('invalid');
    invalidText[1].innerHTML = "Неккоректный Email";
    return;
  };

  form.submit();
  loader.style.display = "block";
}







// nameInput.onchange = () => {
//   if (!nameInput.value) {
//     nameInput.classList.add('invalid');
//     console.log('Invalid name');
//     invalidText[0].classList.remove('d-none');
//   };
//   if (nameInput.value) {
//     nameInput.classList.remove('invalid');
//     invalidText[0].classList.add('d-none');
//   };
// }

// emailInput.onchange = () => {
//   if (!emailInput.value || !validateEmail(emailInput.value)) {
//     emailInput.classList.add('invalid');
//     invalidText[1].classList.remove('d-none');
//   };
//   if (emailInput.value && validateEmail(emailInput.value)) {
//     emailInput.classList.remove('invalid')};
// }

// numberInput.onchange = () => {
//   if (!numberInput.value) {
//     numberInput.classList.add('invalid');
//     numberInput.classList.remove('d-none');
//   };
//   if (numberInput.value) numberInput.classList.remove('invalid');
// }

// messageInput.onchange = () => {
//   if (!messageInput.value) {
//     messageInput.classList.add('invalid');
//     messageInput.classList.add('invalid');
//   };
//   if (messageInput.value) messageInput.classList.remove('invalid');
// }


