import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const localStorageKey = 'feedback-form-state';
const savedState = localStorage.getItem('feedback-form-state');

emailInput.addEventListener('input', throttle(handleInput, 500));
messageInput.addEventListener('input', throttle(handleInput, 500));

function handleInput() {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(feedbackFormState));
}

if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const reSavedState = localStorage.getItem('feedback-form-state');

  if (reSavedState) {
    console.log({ email: emailInput.value, message: messageInput.value });
  }

  localStorage.removeItem(localStorageKey);

  emailInput.value = '';
  messageInput.value = '';
}
