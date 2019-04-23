const imgList = document.querySelectorAll("img");
for (let i = 0; i < imgList.length; i++) {
    /*imgList[i].addEventListener("click",function(){
        console.log(this.src); window.open(this.src,"myImage","resizable=yes,width=500,height=500");
    })*/
    imgList[i].onclick = function () {
        console.log(this.src);
        window.open(this.src, "myImage", "resizable=yes,width=500,height=500");
    }
}