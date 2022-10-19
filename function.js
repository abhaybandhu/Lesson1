/*
var data = [100,200,300];
let sum = 0;
data.forEach(value=> sum += value);
console.log(sum);*/

// var weeksDay= new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
// console.log(weeksDay);

//1.
var array = [1,2,3,4,5,6];

function swap_half_array( myarray){
    if (myarray.length %2 != 0) return;

    const len = myarray.length;
    for (let i = 0; i < len/2; ++i){
        let temp = myarray[i];
        myarray[i]= myarray[len/2 +i];
        myarray[len/2 +i ] = temp;
    }

    return myarray;
}

console.log(swap_half_array(array));

//2
let string = "Germany";

function capitatlize(string){
    newString = [];
    for(let  i = 0;i < string.length; ++i ){
        if (string[i].toUpperCase() == string[i]){
            newString[i] = string[i].toLowerCase();
        }else {
            newString[i]= string[i].toUpperCase();
        }
    }
    return newString.toString().replaceAll(',','');
}

console.log(capitatlize(string));


//3
var stringorders=[ "asd", "ajhdhad","ajhj", "er", "sdf"];
function sortLength(myarray){
    return myarray.sort(function(a, b){return b.length - a.length});
}
console.log(sortLength(stringorders));


function reverseNumber(number){
    let convertString = number.toString().split('');
    return parseInt(convertString.reverse().join(''));
}

//4
let value = 12345;

console.log(reverseNumber(value));

//5
function checkPalindrom(string){
    
    let arrayString = string.split('');
    const len = arrayString.length;
    for (let i = 0; i < len/2; ++i)
        if (arrayString[i] != arrayString[len -i-1]) return false;

    return true;
    
}
console.log(checkPalindrom("racecar"));

//6
function alphabeticalOrder(passedString){
    return passedString.split('').sort().join('');
}
console.log(alphabeticalOrder("hello"));

//7

function capitalizeFirst(parameterString){
    return parameterString[0].toUpperCase()+ parameterString.substring(1,parameterString.length)
}

console.log(capitalizeFirst("better"));
