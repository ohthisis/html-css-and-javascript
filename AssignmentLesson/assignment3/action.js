let gotIt = document.getElementById("got-it");
let pageForm = document.getElementById("page-form");

function opendialog() {
    gotIt.classList.add("open-dialog");
    document.body.style.background="gray";
}

function closedialog() {
    gotIt.classList.remove("open-dialog");
    document.body.style.background="white";
}



