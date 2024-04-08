const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("login-form-submit")
const errorMessage = document.getElementById("error-message")

loginButton.addEventListener("click",(p)=>{
    p.preventDefault();
    const username = loginForm.firstname.value;
    const secondname = loginForm.secondtname.value;
    const phone = loginForm.phonenumber.value;
})