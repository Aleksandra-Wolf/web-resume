const callForm = document.querySelector('.call-back-bckgr');
const requestModal = document.querySelector('#request-modal');
const requestBtn = document.querySelector('#request-btn');

const callNameField = document.querySelector('#call-back-name');
const callEmailField = document.querySelector('#call-back-email');
const callPhoneField = document.querySelector('#call-back-phone');

console.log("Hi, I'm callback form");

callPhoneField.addEventListener('click', function () {
  if (!callPhoneField.value.trim()) {
    callPhoneField.value = '+380';
  }
});

callPhoneField.addEventListener('blur', function () {
  if (callPhoneField.value.trim() === '+380') {
    callPhoneField.value = '';
  }
});

callForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let hasError = false;

  if (!callNameField.value.trim()) {
    callNameField.classList.add('call-back-field-error');
    hasError = true;
  } else {
    callNameField.classList.remove('call-back-field-error');
  }

  if (!callEmailField.value.trim() || !isEmailValid(callEmailField.value)) {
    callEmailField.classList.add('call-back-field-error');
    hasError = true;
  } else {
    callEmailField.classList.remove('call-back-field-error');
  }

  if (!callPhoneField.value.trim() || !isPhoneValid(callPhoneField.value)) {
    callPhoneField.classList.add('call-back-field-error');
    hasError = true;
  } else {
    callPhoneField.classList.remove('call-back-field-error');
  }

  if (hasError) {
    return;
  }

  console.log(callNameField.value.trim());

  callNameField.value = '';
  callEmailField.value = '';
  callPhoneField.value = '';

  requestModal.classList.add('modal-active');
  setTimeout(function () {
    requestModal.classList.remove('modal-active');
  }, 3000);
});

function isPhoneValid(phone = '') {
  const regexp =
    /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;
  return phone.match(regexp);
}

function isEmailValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
