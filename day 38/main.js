(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) }
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
        }


    function btn(){
        const email = document.getElementById("email").value;
        console.log(email);
        const name = document.getElementById("name").value;
        console.log(name);
        const password = document.getElementById("password").value;
        console.log(password);
        const position = document.getElementById("position").value;
        console.log(position);       
    }
    