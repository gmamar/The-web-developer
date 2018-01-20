var p1 = document.getElementById('p1');
var p1In = document.getElementById('p1In');
var p2 = document.getElementById('p2');
var p2In = document.getElementById('p2In');
var goal = document.getElementById('goal');
var goalNumb = document.getElementById('goalNumb');
var scrHis = document.getElementById('scrHis');
var scrP1 = document.getElementById('scrP1');
var scrP2 = document.getElementById('scrP2');
var res = document.getElementById('res');




function winner(score) {

    if (score.textContent == goal.textContent) {
        alert(`the winner is: ${score.id == "p1" ? 'p1' : 'p2'}`);
        var li = document.createElement('li');
        li.innerHTML = `P1: ${p1.textContent}; P2 ${p2.textContent}.`
        scrHis.appendChild(li);
        score.id == 'p1' ? scrP1.textContent = Number(scrP1.textContent) + 1 : scrP2.textContent = Number(scrP2.textContent) + 1
        p1.textContent = 0;
        p2.textContent = 0;
    }
}

goalNumb.addEventListener('change', () => {
    goal.textContent = goalNumb.value;
})
p1In.addEventListener('click', () => {
    p1.textContent = Number(p1.textContent) + 1;
    winner(p1);
});
p2In.addEventListener('click', () => {
    p2.textContent = Number(p2.textContent) + 1;
    winner(p2);
});

res.addEventListener('click', () => {
    scrP1.textContent = 0;
    scrP2.textContent = 0;
    scrHis.innerHTML = '';
});


