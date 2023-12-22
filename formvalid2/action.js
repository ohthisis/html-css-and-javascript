const form=document.querySelector("form"),
eField=form.querySelector(".email"),
eInput=eField.querySelector("input"),
pField=form.querySelector(".password"),
pInput=pField.querySelector("input"),
nField=form.querySelector(".name"),
nInput=nField.querySelector("input");

form.onsubmit= (e)=>{
    console.log()
    e.preventDefault(); 
    if(eInput.value==""){
        eField.classList.add("error");
    }
    if(pInput.value===""){
        pField.classList.add("error");
    }
    if(nInput.value===""){
        nField.classList.add("error");
    }

    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    },500);
}