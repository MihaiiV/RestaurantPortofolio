const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();


  loadingSpinner.style.display = 'block';
  const formData = new FormData(contactForm);
  const firstName = formData.get('firstname');
  const email = formData.get('Email');
  const subject = formData.get('Subiect');
  const message = formData.get('Mesaj');


  if (!firstName || !email || !subject || !message) {
    errorMessage.textContent = 'Please fill in all the required fields.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    loadingSpinner.style.display = 'none';
  } else {
 
    errorMessage.style.display = 'none';
    successMessage.textContent = 'Your message was sent successfully.';
    successMessage.style.display = 'block';

 
    contactForm.reset();


    setTimeout(() => {
      loadingSpinner.style.display = 'none';
    }, 1000);
  }
});