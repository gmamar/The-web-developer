function rev(arr) {
    var text = [];
    for(var i = 0; i < arr.length; i++){
        text.unshift(arr[i]);
    }
    return text;
}
console.log(rev([1, 2, 3, 4, 5]));

function iden(arr){
    for(var x = 0; x < arr.length; x++){
        for(var i = 0; i < arr.length; i++){
            if (arr[x] !== arr[i]) {
                return false;
            };
        }   
    }
    return true;
}
console.log(iden([1,1,1,1,1]))
console.log(iden([1,1,1,2,1]))
