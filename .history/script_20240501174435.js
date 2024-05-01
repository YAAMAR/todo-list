const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById(`${inputBox}`);
console.log(listContainer);

function addTask(){
    if(inputBox.value===''){
        alert("you must write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listContainer?.addEventListener("click",(e)=>{
    if(e.target.getName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.getName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();