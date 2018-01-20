
var squares = document.querySelectorAll('.square');
var colorDis = document.getElementById('colorDis');
var message = document.getElementById('message');
var reset = document.getElementById('reset');
var hard = document.getElementById('hard');
var easy = document.getElementById('easy');
var nums = 6;
var color = generateRColor(nums);

reset.addEventListener('click', function(){
    reset.textContent = 'Change colors!'
    color = generateRColor(nums);
    colorDis.textContent = color[Math.random() * nums | 0];
    for ( var i = 0; i < squares.length; i++){
        squares[i].style.background = color[i];
    }
    document.getElementById('header').style.background = 'steelblue';
    message.textContent = '';  
})

function toggle(){
    easy.classList.toggle('select');
    hard.classList.toggle('select');
}

easy.addEventListener('click',function(){
    if (hard.classList == 'select') toggle();
    nums = 3
    color = generateRColor(nums);
    colorDis.textContent = color[Math.random() * nums | 0];
    for (var i = 0; i< squares.length; i++){
        if (color[i]){
            squares[i].style.background = color[i]
        }else{
            squares[i].style.display = 'none';
        }
    }
})

hard.addEventListener('click',function(){
    if (easy.classList == 'select') toggle();
    nums = 6
    color = generateRColor(nums);
    colorDis.textContent = color[Math.random() * 6 | 0];
    for (var i = 0; i< squares.length; i++){
        squares[i].style.background = color[i]
        squares[i].style.display = 'block';
    }
})

colorDis.textContent = color[Math.random() * 6 | 0];

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color[i];
    squares[i].addEventListener('click', function () {
        var clicked = this.style.background;
        if (clicked == colorDis.textContent) {
            message.textContent = 'Correct'
            reset.textContent='Play Again ?'
            changeColor(clicked)
        } else {
            message.textContent = 'Try Again !!'
            this.style.background = '#222222';
        }
    })
}

function changeColor(color) {
    
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
    document.getElementById('header').style.background = color;
}

function generateRColor(num){
    var newColor = [];
    for (var i = 0; i<num; i++){
        newColor.push(`rgb(${Math.random()*256|0}, ${Math.random()*256|0}, ${Math.random()*256|0})`)
    }
    return newColor;
}