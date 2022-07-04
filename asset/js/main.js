const myForm = document.getElementById('myForm');
const errorInput = document.getElementById('error-input');

AOS.init();

errorInput.style.display = 'none';

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('https://api-customers.herokuapp.com/api/customers/', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            response.json();
            if(response.status == 200) window.location.assign('gracias.html');
            else errorInput.style.display = 'block';
        })
        .catch(err => console.error(err));
    });