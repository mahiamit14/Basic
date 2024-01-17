// var a = "5";
// var b = "10";    
// /*Do not change the code above*/

// //Write your code here
// var c=a;
// a=b;
// b=c;
// /***********Do not change the code below 👇*******/
// console.log("a is " + a);
// console.log("b is " + b);

// if( 0) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }
// for(var i=0; i<5; ++i) { 
//     console.log("Hello") ; 
//  }

//  var i , j ;    
//    for(i=0, j=10; i<5; ++i) { 
//       console.log("Hello"); 
//    }
// typeof( typeof( typeof( 100 ) ) )n

// function sum(a,b){
//     return a+b;
// }
// let result = sum(4,5);
// console.log(result);

// Write your code here:
// function returnDay(n){
//     if(n===1){
//     return "Monday";
//     }
//         else if(n===2){
//             return "Tuesday";
//         }
//         else if(n===3){
//             return "Wednesday";
//         }
//         else if(n===4){
//             return "Thursday";
//         }
//         else if(n===5){
//             return "friday";
//         }
//         else if(n===6){
//             return "saturday";
//         }
//         else if(n===7){
//             return "sunday";
//         }
//         else if(n<1 || n>7){
//             return null;
//         }
//     }
    
//      var ans = returnDay(8);
    
//     console.log(ans);

// var arr = [ 1, , 3, 4 ];
// var Day = ['Sunday', 'Monday', 'Tuesday','Wednesdaay','Thursday','Friday','Saturday'];

// function returnDay(n){
//   return (n<1)||(n>7)?null:Day[n];
// }

// console.log(returnDay(9));

// hoisted(); 
// var hoisted = function() {
//     console.log('bar');
// };
// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//     }
// });
// Write your code here:
// var student ={
//     name : "Amit Kumar Thakur",
//     age : 23,
//     roll_no : 1,
//     adress : {
//     city:"Darbhanga",
//     state:"Bihar"
// }
// };

// console.log( delete student.roll_no);
// console.log(  Object.values(student.adress));


// var sec = 1;
// function sayHello(){
//     console.log("after", sec);
//     sec++;
//     if(sec==6){
//         // Stop
//         clearInterval(id);
//     }
// }
// // setTimeout(sayHello,1);
// var id = setInterval(sayHello, 100);


 /*Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.
Expected Output */
// function timer(){
// for(var i = 1;i<=5;i++){
//     console.log(i);
//     if(i==6){
//         clearInterval(id);
//         return;
//     }
// }

// }
// setInterval(timer, 1000);
// console.log(window.location === document.location)

let window;
function test(){
    return this;
    }
    console.log(test()==window);