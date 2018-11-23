const num = parseFloat(prompt("Enter number"));
if (isNaN(num)) {
   alert ("enter number");
} else {
    alert (fibLoop(num));
}
function fibLoop(num){
   let x = 1;
   let y = 1;
   
   for(let i=3; i<=num; i++){
   let next = x + y;
   x=y;
  y = next;
    }
    return y;
} 


/*const num2 = parseFloat(prompt("Enter number"));
if (isNaN(num2)) {
    alert ("enter number");
} else {
    alert (fibArr(num2));
}

function fibArr(num2){
    let fibArr = [1,1];
    for(let i=3; i<=num2; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
} */

/*const num3 = parseFloat(prompt("Enter number"));
if (isNaN(num3)) {
    alert ("enter number");
} else {
    alert (fibRec(num3));
}

function fibRec(num3){
    var n = 1;
   if(n>0){
        return fibRec(n-1)+fibRec(n+1);
    } 
}*/
