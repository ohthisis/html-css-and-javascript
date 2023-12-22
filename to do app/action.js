const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-cointainer")

function addtask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
       
    }
    inputBox.value="";
    saveData();
    savedata2();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        savedata2();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// // To store in  local browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
function savedata2(){
    localStorage.setItem("data2",listContainer.innerHTML);
}
function showTask2(){
    listContainer.innerHTML=localStorage.getItem("data2");
}
showTask();
showTask2();