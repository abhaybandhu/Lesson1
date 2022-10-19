//1
function mostFrequent(myarray){
    uniqueNum =[];
    counters=[];
    let max =0;
    let mostFrequent =0

    //O(n)
    for (let i =0; i< myarray.length; ++i){
        let index = 0
        let currentmax=0
        if ((index = uniqueNum.indexOf(myarray[i])) == -1){
            uniqueNum.push(myarray[i]);
            counters.push(currentmax);
        }else 
           currentmax= ++counters[index];
        if (currentmax > max){
            max = currentmax;
            mostFrequent = myarray[i];
        }
    }
    return mostFrequent;
}

numberArray = [1,2,2,2,2,3,4,5,4,5,2,2,2,7];

console.log(mostFrequent(numberArray));

// 3
function splitConsecutive(myarray){
    myarray = myarray.sort((a,b)=> a-b);
    newArray=[];
    innerArray=[];

    previousValue = myarray[0] -1;
    for(let i = 0; i < myarray.length; ++i){
        if (myarray[i] -1 != previousValue){
        
            newArray.push(innerArray);
            innerArray=[];
        }

        previousValue = myarray[i];
        innerArray.push(myarray[i]);
    }
    newArray.push(innerArray);

    return newArray;
}

array = [3,6,4,7,10,13,14,11];
console.log(splitConsecutive(array));
