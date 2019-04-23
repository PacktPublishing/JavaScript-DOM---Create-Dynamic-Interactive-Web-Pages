const lis = document.querySelectorAll("li");
for(let x=0;x<lis.length;x++){
    console.log(lis[x]);
    lis[x].addEventListener("mouseenter",function(e){
        //this.classList.add("red");
         lis[x].style.color = "red";
         lis[x].style.backgroundColor = "yellow";
    })
    lis[x].addEventListener("mouseleave",function(e){
        //this.classList.remove("red");
         lis[x].style.backgroundColor = "";
         lis[x].style.color = "";
    })
}