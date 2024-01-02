window.addEventListener('load',()=>{
    if(!localStorage.getItem('js_react_laravel_app')){
        window.location.href="index.html";
    }
});
let welcome=document.getElementById('welcome');
let { name, ...storage}=JSON.parse(localStorage.getItem('js_react_laravel_app'));
// console.log(storage.permissions);
// console.log(storage);

let [posts,article,...rest]=storage.permissions;
console.log(posts);
welcome.innerText=`Welconme ${name}`;

function logout(){
    localStorage.removeItem('js_react_laravel_app');
    localStorage.clear();
    window.location.href='index.html';
}