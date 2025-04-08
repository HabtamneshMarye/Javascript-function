// 1.array of string to reverse

reverseAndSort(["cat", "dog", "apple", "banana", "egg"]);

function reverseAndSort(arr){

    let reversed = arr.map(str => str.split('').reverse().join(''));

    reversed.sort();

    let last2 =reversed.slice(-2).sort().reverse();

    reversed.splice(-2,2, ...last2);

    console.log(reversed);
}

//2. an element is negative, else zero

let array1=[1,2,3];

console.log(checkNum(array1));  

function checkNum(array){

    for ( let num of array){

        if(num > 0) return "postive";

        else if (num < 0) return "negative";
    }

    return "zero";
}


// 3. a function that return a new array of employe

const employes=[{id:1, name: "Alice", salary:5000}];
function updateSalae(employes){
    return employes.map(emp =>({
        id: emp.id,
        name:emp.name,
        salary:emp.salary 
    }));
}
const updated=updateSalae(employes);
console.log(updated);


// 4. function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2

function doubleNum(array){
    array.forEach (num => console.log(num *2))  
}
doubleNum([1, 2, 3]);


//5.modification of array

modifyArray([1,2,3,4,5])

function modifyArray(numbers){

    for (let i=0; i< numbers.length; i++){
        
        if (i < 4) {
            numbers[i] *= 8;
        }else if (i >= numbers.length -2){
            numbers[i] += 5;
        }
    }
    console.log(numbers);
}



