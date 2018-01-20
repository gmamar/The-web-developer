var color = [
    'rgb(255,0,0)',
    'rgb(0,255,0)',
    'rgb(255,255,0)',
    'rgb(0,0,255)',
    'rgb(255,0,255)',
    'rgb(0,255,255)'
];

var squares = document.querySelectorAll('.square');
var colorDis = document.getElementById('colorDis');

colorDis.textContent = color[Math.random()*6|0];

for (var i = 0; i< squares.length; i++){
    squares[i].style.background = `rgb(${(Math.random()*256|0)},${(Math.random()*256|0)},${(Math.random()*256|0)})`;

    squares[i].addEventListener('click', (e)=>{
        
        colorDis.textContent = e.target.style.background.toUpperCase();
    })
}
