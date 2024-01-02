
window.addEventListener('load',()=>{
    if(localStorage.getItem('login_to_local')){
        window.location.href='profile.html';
    }
});
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
       x.classList.add("open-popup");
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
       y.classList.add("open-popup");
   }

   // login
let form=document.getElementById("login");

   const users = [
    { email: 'user1@gmail.com', password: 'password1', name: 'User 1' },
    { email: 'user2@gmail.com', password: 'password2', name: 'User 2' },
    { email: 'user3@gmail.com', password: 'password3', name: 'User 3' },
    { email: 'user4@gmail.com', password: 'password4', name: 'User 4' },
    { email: 'user5@gmail.com', password: 'password5', name: 'User 5' }
];


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let userEntrye=form.email.value;
    let userEntryp=form.password.value;
    let user=users.find(u=>u.email===userEntrye && u.password===userEntryp);

    if(user){
        const data={
            email:form.email.value,
            name:user.name
        }
    localStorage.setItem('login_to_local',
    JSON.stringify(data));
    window.location.href='profile.html';
    }else{
        alert("invalid User");    
    }

});



