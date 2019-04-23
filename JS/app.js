const inputSelect = document.querySelector("input[name='newItem']");
const mainList = document.querySelector("ul");
const allListItems = document.querySelectorAll("li");
for (let x = 0; x < allListItems.length; x++) {
    allListItems[x].addEventListener("click", myList);
}
inputSelect.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        makeNew();
    }
})

function makeNew() {
    let li = document.createElement("li");
    li.addEventListener("click", myList);
    let textValue = inputSelect.value;
    inputSelect.value = "";
    let tempNode = document.createTextNode(textValue);
    li.appendChild(tempNode);
    console.log(li);
    mainList.appendChild(li);
}

function myList() {
    let temp = this.classList.toggle("red");
    if (temp) {
        let span = document.createElement("span");
        span.textContent = " X ";
        span.addEventListener("click", function () {
            this.parentElement.remove();
        })
        this.appendChild(span);
    }
    else {
        this.getElementsByTagName("span")[0].remove();
    }
}