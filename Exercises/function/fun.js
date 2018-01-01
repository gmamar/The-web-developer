function isEven(x){
    return x % 2 === 0;
};

console.log(isEven(5));
console.log(isEven(6));

function numFac(x){
    for (var i = x - 1 ; i > 0; i--){
        x *= i;
    }
    return x
}
console.log('\n' + numFac(99));

var res ;
function kebabToSnake(str){
    for(var i = 0; i < str.length; i++){
        if(str[i] === '-'){
        
           str = str.replace('-','_');
            
        } 
    }
    return str;
}

console.log(kebabToSnake('george-mamar-fouad'));

