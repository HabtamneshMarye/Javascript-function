// function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2

function doubleNum(array){
    array.forEach (num => console.log(num *2))  
}
doubleNum([1, 2, 3]);

//f an element is negative, else zero
function checkNum(array){
    for ( let num of array){
        if(num > 0) return "postive";
        else if (num < 0) return "negative";
    }
    return "zero";
}

let array1=[1,2,3];
console.log(checkNum(array1));  



