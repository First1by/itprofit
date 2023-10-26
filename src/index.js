const form = document.form;
const nameInput = document.form.name;
const emailInput = document.form.email;
const numberInput = document.form.number;
const messageInput = document.form.message;

let validInput;

const validateEmail = (email) => {
  // const pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w)$/;
  // return pattern.test(email);
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  return regex.test(email);
};

nameInput.onchange = () => {
  if (!nameInput.value) {
    nameInput.classList.add('invalid');
    console.log('Invalid name');
  };
  if (nameInput.value) nameInput.classList.remove('invalid');
}

emailInput.onchange = () => {
  if (!emailInput.value || !validateEmail(emailInput.value)) {
    emailInput.classList.add('invalid');
  };
  if (emailInput.value && validateEmail(emailInput.value)) emailInput.classList.remove('invalid');
}

numberInput.onchange = () => {
  if (!numberInput.value) {
    numberInput.classList.add('invalid');
  };
  if (numberInput.value) numberInput.classList.remove('invalid');
}

messageInput.onchange = () => {
  if (!messageInput.value) {
    messageInput.classList.add('invalid');
  };
  if (messageInput.value) messageInput.classList.remove('invalid');
}

form.onsubmit = (e) => {
  e.preventDefault();

  if (!nameInput.value || !emailInput.value || !numberInput.value || !messageInput.value) return;
  if (!validateEmail(emailInput.value)) return;

  form.submit();
  loader.style.display = "block";
}





// const validateEmptyInput = () => {
//   validInput = true;
//   for (let i = 0; i < form.length - 1; i++) {
//     if (!form[i].value) {
//       form[i].classList.add('invalid');
//       validInput = false;
//     } else {
//       form[i].classList.remove('invalid');
//     }
//   }
// }

// form.onsubmit = (e) => {
//   e.preventDefault();
//   validateEmptyInput();

//   if (!validInput) return;
//   if (!validateEmail(emailInput.value)) return;

//   form.submit();

//   loader.style.display = "block";
// }


