const eleList = document.querySelectorAll(".listItem");
for (let x = 0; x < eleList.length; x++) {
    console.log(eleList[x]);
    eleList[x].style.backgroundColor = "yellow";
    eleList[x].style.padding = "25px";
    eleList[x].addEventListener("click", function () {
        eleList[x].classList.toggle("red");
    });
}

function makeItRed() {
    console.log(this);
    let temp = this.classList.toggle("red");
    console.log(temp);
}
const h1 = document.getElementById("myID");
h1.addEventListener("click", function () {
    console.log("click");
});
h1.addEventListener("click", myFun);

function myFun() {
    console.log("clicked");
}