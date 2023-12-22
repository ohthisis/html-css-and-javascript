// to do app
const inputboxs=document.getElementById("inputboxs2");
const listContainer=document.getElementById("list-container");
const resultBox=document.querySelector(".result-box");
const inputBox=document.getElementById("inputboxs1");
let toStoreFromNewTodo=[];

inputBox.onkeyup=function(){
    let result = [];
    let input=inputBox.value;

    if(input.length){
        result=toStoreFromNewTodo.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    document.querySelectorAll('#list-container li').forEach(item => {
        item.classList.add('hidden');
    });
    result.forEach(keyword => {
        document.querySelectorAll(`#list-container li:contains('${keyword}')`).forEach(item => {
            item.classList.remove('hidden');
        });
    });
    if(!result.length){
        resultBox.innerHTML='';
    }
}

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML= "<ul>" +content.join('')+ "</ul>";
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    resultBox.innerHTML='';
}
// 
function addtask(){
    if(inputboxs.value===""){
        alert("You must write soomethings!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputboxs.value;
        listContainer.appendChild(li);        
        let span=document.createElement("span");
        span.innerHTML="\u267B";
        li.appendChild(span);
        toStoreFromNewTodo.push(inputboxs.value);
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();       
    }
},false);