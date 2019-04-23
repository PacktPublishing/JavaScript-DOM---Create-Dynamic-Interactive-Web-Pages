const ele = document.querySelector("input");
ele.addEventListener("keypress", addItem);

function addItem(event) {
    console.log(event);
    document.querySelector("h1").textContent = ele.value;
    if (ele.value.length > 5) {
        ele.style.backgroundColor = "red";
    }
    else {
        ele.style.backgroundColor = "white";
    }
    if (event.keyCode === 13 && ele.value.length > 1) {
        document.querySelector("h1").style.backgroundColor = "yellow";
    }
}
/*let keys = {};
document.addEventListener("keydown",pressKeyOn);
document.addEventListener("keyup",pressKeyOff);

function pressKeyOn(event){
    //console.dir(event.key);
    event.preventDefault();
    keys[event.key] = true;
    console.log(keys);
}

function pressKeyOff(event){
    //console.dir(event.key);
    event.preventDefault();
     keys[event.key] = false;
     console.log(keys);
}*/