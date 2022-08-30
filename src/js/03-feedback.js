import throttle from 'lodash.throttle';

const SAVED_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const parsedData = JSON.parse(localStorage.getItem(SAVED_KEY));
const formData = {...parsedData};


populateForm()

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onFormInput, 1000))

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(SAVED_KEY, JSON.stringify(formData))
    
}
function onFormSubmit(evt) {
  evt.preventDefault();
  const dataFromStorage = JSON.parse(localStorage.getItem(SAVED_KEY));
  console.log(dataFromStorage);
  evt.currentTarget.reset();
  localStorage.removeItem(SAVED_KEY)
  
}
 
function populateForm() {
  const savedForm = parsedData;
  if (savedForm) {
    Object.entries(savedForm).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
