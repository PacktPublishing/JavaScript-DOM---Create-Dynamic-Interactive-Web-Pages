let eleList = document.getElementsByClassName('first');
eleList = document.getElementsByTagName('span');
eleList = document.querySelectorAll('.first');
for (let i = 0; i < eleList.length; i++) {
    let el = eleList[i];
    console.log(el);
    eleList[i].textContent = (i + 1) + ' updated';
}
eleList.forEach(function (el, index) {
        console.log(index);
        el.textContent = `${index} : updated`;
        el.style.backgroundColor = 'red';
    }) /// only for nodelist
console.log(eleList);