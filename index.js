// program1 : adding three number
function addNumbers(a,b,c){
    return a+b+c;
}
console.log(addNumbers(3,4,5));

//program2: find even number in an array
function findEvenNumber(arr){
    var result="";
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i]%2==0){
            result += arr[i]+" "; 
        }
    }
    return result;
}
console.log(findEvenNumber([1,2,3,4,5,6]));

// program3: find 0dd number in an array
function findOddNumber(arr){
    var res="";
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i]%2 != 0){
            res += arr[i]+" "; 
        }
    }
    return res;
}
console.log(findOddNumber([1,2,3,4,5,6]));