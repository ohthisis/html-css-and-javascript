// window.addEventListener("load", () => {
//     if (!localStorage.getItem("login_to_local")) {
//         window.location.href = "validation.html";
//     }
// });

function signoutfun() {
    localStorage.removeItem('login_to_local');
    window.location.href = 'main.html';
}
