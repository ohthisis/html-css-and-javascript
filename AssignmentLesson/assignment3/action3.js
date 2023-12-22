// login form
const form = document.querySelector("form");
const nField = form.querySelector(".name");
const nInput = nField.querySelector("input");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");


var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var passwordError=document.getElementById("password-error");


form.onsubmit=(e)=>{

    e.preventDefault(); 
    if(nInput.value===""){
        nField.classList.add("error");
        nameError.innerHTML="Name must include lowercase case and number";
    }else if (!/[a-z]\d/.test(nInput.value)) {
        nameError.innerHTML = 'Name must include lowercase letter and number';
        return false;
    }else {
        nameError.style.display="none";
        nField.classList.remove("error");
    };
    
    if(eInput.value===""){
        eField.classList.add("error");
        emailError.innerHTML="Invalid email format";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eInput.value)){
        emailError.innerHTML="Invalid email format";
    }else{
        emailError.style.display='none';
        eField.classList.remove("error");
    }

    if(pInput.value===""){
        pField.classList.add("error")
        passwordError.innerHTML="Password must be at least 6 characters";
    }else if(pInput.value.length<6){
        pField.classList.add("error")
        passwordError.innerHTML="Password must be at least 6 characters";
    }else{
        passwordError.style.display="none";
        pField.classList.remove("error");
    }
 
}

function validForm(){
    nameError.style.display='block';
    emailError.style.display='block';
    passwordError.style.display='block';
}
