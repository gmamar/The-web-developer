console.log('Print all numbers between -10 and 19');

for(var x = -10; x < 20; x++){
    console.log(x);
}

console.log('\n Print all even numbers between 10 and 40');
for(var x = 10; x <= 40; x+=2){
    console.log(x);
}

console.log('\n Print all odd numbers between 300 and 333')
for(var x = 301; x <= 333; x+=2 ){
    console.log(x);
}

console.log('\n Print all numbers divisible by 5 AND 3 between 5 and 50')
for(var x= 5; x <= 50; x++){
    if (x % 3 == 0 && x % 5 == 0){
        console.log(x);
    }
}