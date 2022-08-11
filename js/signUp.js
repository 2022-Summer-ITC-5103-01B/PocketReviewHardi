const $ = (selector) => document.querySelector(selector);// short-hand operator
const validation=() =>{
    const fname = $('#firstName');
    const lname =$('#lastName');
    const email = $('#emailId');
    const phone = $('#phoneNumber');
    const password = $('#pass');
    const conformPass = $('#conPass');
    let namepattern = /^[a-zA-Z]+$/;
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validReturn= true;

    if (fname.value == "") {
        fname.nextElementSibling.textContent=' **Please fill the first name field';
        validReturn=false;
    }
    else if(!namepattern.test(fname.value)){
        fname.nextElementSibling.textContent='Pelase enter letters only';
        validReturn=false;
      }
    if (lname.value == "") {
        lname.nextElementSibling.textContent='Please fill the last name field'
        validReturn=false;
    }
    else if(!namepattern.test(lname.value)){
        lname.nextElementSibling.textContent='Pelase enter letters only'
        validReturn=false;
      }
    if (email.value == "") {
        email.nextElementSibling.textContent='Please fill the email field';
        validReturn=false;
    }
    if (!validEmail.test(email.value)) {
        email.nextElementSibling.textContent='**Invalid email id';
        validReturn=false;
    }
    if (phone.value == "") {
        phone.nextElementSibling.textContent=' **Please fill the phone number field';
        validReturn=false;
    }
    if (password.value === "") {
        password.nextElementSibling.textContent='  **Please fill the password';
        validReturn=false;
    }
    else if((password.value.length <= 5)) {
        password.nextElementSibling.textContent=' **Password is not strong';
        validReturn=false;
    }
    if (conformPass.value === "") {
        conformPass.nextElementSibling.textContent=' **Please fill the confirm password field';
        // document.getElementById('conPass').innerHTML = " **Please fill the confirm password field";
        validReturn=false;
    }
    if (password.value != conformPass.value) {
        conformPass.nextElementSibling.textContent=' **Password is not matching';
        validReturn=false;
    }   
    if(validReturn == true){
        $('form').submit();
    }
};
document.addEventListener('DOMContentLoaded', () => {
    $('#signUp').addEventListener('click', validation);
  });