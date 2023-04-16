function arithmetic(a, b, operator){
   switch (operator) {
       case 'add':
           return a+b;
       case'subtract':
           return a-b;
       case 'multiply':
           return a*b;
       case'divide':
           return a/b;
   }
}


console.log(arithmetic(5,2,'add'))
console.log(arithmetic(5,2,'subtract'))
console.log(arithmetic(5,2,'multiply'))
console.log(arithmetic(5,2,'divide'))





// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5