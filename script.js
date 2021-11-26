var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/
let email = document.getElementById('email');
let errorMail = document.getElementById('errorEmail');

// Verification de l'email
email.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    errorMail.innerText = "Le format de l'email est incorrect"
  } else {
    errorMail.innerText = ""
  };
});
