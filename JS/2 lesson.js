console.log(document.getElementById('myID'));
console.log(document.querySelector('#myID'));
console.log(document.querySelector('.first'));
console.log(document.querySelector('div'));
document.querySelector('span').style.backgroundColor = 'yellow';
document.querySelector('.first span').style.backgroundColor = 'blue';
document.querySelector('li:last-child').style.backgroundColor = 'green';
document.querySelector('li:first-child').style.backgroundColor = 'red';
document.querySelector('li:nth-child(4)').style.backgroundColor = 'purple';