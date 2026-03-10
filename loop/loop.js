//for (let i = 1; i <= 20; i++){
  //  document.write("<br>i =", i);
//}
// for loop

//let i =1;

//while(i<=20){
  //  document.write("<br>i =", i);
    //i++;
//}

//do-while loop

//let i = 1;

//do{
  //  document.write("Apan college<br>");
    //i++;
//}while(i <= 5)

//for-of loop

//let str = "Apnacollege"

//for(let i of str){
  //  document.write("<br>i =", i);
    //i++;
//}

//even and odd number using code
//for (let num = 0; num<=100; num++){
   // if(num%2 !==0){
   // document.write("<br>num =", num)
   // }
//}

//guess the game number
let gameNum = 25;

let userNum = prompt("Guess the game number =");
while(userNum !=gameNum){
    userNum = prompt("You entered wrong number, Guess again =");
}
document.write("Congratulations, You entered the right number");