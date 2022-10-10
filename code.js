
const fname = document.getElementById("name");
const errorName = document.getElementsByClassName("name");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById('form_box');
const error = document.querySelectorAll('.error')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(firstName === '') {
        fname.classList.add ('red_border');
        error[0].classList.remove ('hidden')
    } else {
        fname.classList.remove ('red_border');
        error[0].classList.add ('hidden')
    }
    
    
    if(lastName === '') {
        lname.classList.add ('red_border');
        error[1].classList.remove ('hidden')
    }   else {
        lname.classList.remove ('red_border');
        error[1].classList.add ('hidden')
    }
    
    if(emailValue === '') {
        email.classList.add ('red_border');
        error[2].classList.remove ('hidden')
    }   else {
        email.classList.remove ('red_border');
        error[2].classList.add ('hidden')
    }
    
    if(passwordValue === '') {
        password.classList.add ('red_border');
        error[3].classList.remove ('hidden')
    }   else {
        password.classList.remove ('red_border');
        error[3].classList.add ('hidden')
    }

})

