var first = document.getElementById('first');
first.style.backgroundColor = 'red';

var second = document.querySelectorAll('p');
second[0].style.color = 'yellow'; 

var third = document.getElementsByTagName('p');
third[0].style.textShadow = '8px 8px 1px #0000ff';

var forth = document.getElementsByClassName('special');
forth[0].style.border = '1px solid black';