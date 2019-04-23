const ul = document.querySelector("ul");
document.addEventListener("keydown",function(e){
    let li = document.createElement("li");
    let temp = e.key + "(" + e.keyCode + ")";
    let textC = document.createTextNode(temp);
    li.appendChild(textC);
    ul.appendChild(li);
})