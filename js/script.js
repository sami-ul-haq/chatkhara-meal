// Script For Slider
$(document).ready(function () {
    $('.my-slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        speed: 1000,
    });
});


// Form scripts
let logIn = document.getElementById('toggle-login');
let signUp = document.getElementById('toggle-signup');

let logInForm = document.getElementById('log-in');
let signUpForm = document.getElementById('sign-up');

// SignUp Form Appears
signUp.onclick = function () {
    signUpForm.style.display = "block";
    logInForm.style.display = "none";
}

// Login Form Appears
logIn.onclick = function () {
    logInForm.style.display = "block";
    signUpForm.style.display = "none";
}
// Form Scripts Ends


// Model Scripts
// Get the modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let closeModel = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

closeModel.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Model Scripts Ends


// Form Validation 
// Log In
let userLoginEmail = document.getElementById('userEmail');
let userLoginPassword = document.getElementById('userPass');

let loginForm = document.getElementById('log-in');

function loginCheckValues() {
    console.log('Success Submit');
    const userLoginEmailValue = userLoginEmail.value;
    console.log(userLoginEmailValue);
    const userLoginPasswordValue = userLoginPassword.value;

    if (userLoginEmailValue === '') {
        console.log('Error');
        userLoginEmail.style.borderColor = "red";
    }
}

// Sign UP
let userSignupEmail = document.getElementById('userEmailSignUp');
let userSignupPass1 = document.getElementById('userPass1');
let userSignupPass2 = document.getElementById('userPass2');