// let numbers = [1,2,3,4,5];
// function sumUp(toAdd){
//     let result = 0;
//     for(let i=0; i<toAdd.length; i++){
//         result += toAdd[i];
//     }

//     return result;
// }

// console.log(sumUp(numbers));




// three dots converts the list of arguments to an array of arguments
function sumUp(...toAdd){
    console.log(toAdd);
    let result = 0;
    for(let i=0; i<toAdd.length; i++){
        result += toAdd[i];
    }

    return result;
}

console.log(sumUp(1,2,3,"4"));