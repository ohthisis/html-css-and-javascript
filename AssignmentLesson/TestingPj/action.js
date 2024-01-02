window.addEventListener('load',()=>{
    if(localStorage.getItem('js_react_laravel_app')){
        window.location.href='profile.html';
    }
});

let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(
        form.email.value=='mgmg@gmail.com',
        form.password.value=='password'
    ){
        const data={
            email:form.email.value,
            name:'Mg Mg',
            permissions:['post','articles','logs'],
        };
        localStorage.setItem("js_react_laravel_app",
        JSON.stringify(data));
        
        // console.log(window.location);

        // const atag=document.createElement("a");
        // atag.setAttribute("href","profile.html");
        window.location.href='profile.html';
    }
});