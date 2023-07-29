const inputBox= document.getElementById("input-box");
const  ul = document.getElementById("list-container");

function addTask(){  
    if(inputBox.value === ""){
    alert("Type Something To Add !!")}
    else
    {
      let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       ul.appendChild(li);
       let span = document.createElement("span");
       span.innerHTML = "&nbsp <button id='delete'>delete</button>";
       li.appendChild(span);
       span.addEventListener("click",removelist);
    }
    inputBox.value ="";
}
function removelist(event){
    const row = event.target.parentNode.parentNode;//1st PN is span 2nd PN is li
    row.parentNode.removeChild(row)
    // 1--row is li which we want to remove
    // 2--row .parentNode means ul
    //3--so remove ul child which is row(point-1)
}
