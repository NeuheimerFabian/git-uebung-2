document.getElementById('kontaktformular').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    } else {
      alert('Ihre Anfrage wurde erfolgreich gesendet.');
    }
  });
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  