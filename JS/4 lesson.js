const temp = document.querySelector('h1');
console.log(temp);
temp.setAttribute('class', 'red');
const links = document.querySelectorAll('a');
links.forEach(function (el) {
    console.log(el.getAttribute('href'));
    el.setAttribute('href', 'http://www.discoveryvip.com');
})
const listItems = document.querySelectorAll('li');
listItems.forEach(function (item, cnt) {
    item.id = 'li' + cnt;
    item.textContent = 'list item #' + cnt;
    if (item.getAttribute('class')) {
        console.log(item.getAttribute('class'));
    }
})