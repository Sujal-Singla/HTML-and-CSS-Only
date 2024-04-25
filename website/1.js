// function matchHouses(step) {
//     if (step == 1) {
//         return 6;
//     }else if(step == 0){
//         return 0;
//     } 
//     else {
//         return step * 6 - (step - 1);
//     }
// }

// console.log(matchHouses(10)); // Output: 30


// let today = new Date();
// let day = today.getDay();

// let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
// console.log("Today is :" + dayList[day] );

// let hour = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();

// let prepand = (hour>12)?"PM":"AM";

// hour = (hour>=12)? hour-12 : hour;

// if(hour === 0 && prepand === "PM"){
//     if(minutes === 0 && seconds === 0){
//         hour = 12;
//         prepand == noon;
//     }
//     else{
//         hour = 12;
//         prepand = "PM";
//     }
// }
// console.log("Time is :"+ hour  +  prepand+":" + minutes +":" + seconds );

/* let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();


if(day <10 ){
    day = "0"+ day;
}
if(month < 10 ){
    month = "0"+ month;
}
console.log(month + "/" + day +"/"+ year ); */

// function area (s1, s2, s3){
//     let s = (s1 + s2 + s3) / 2;
//     return areatri = Math.sqrt( s*((s-s1) * (s-s2) *( s-s3) ));
// }
// console.log(area(5,6,7));

/* 
function isleapYear(year){
    if((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)  ){
        console.log("is leap year");
    }
    else{
        console.log("Not a leap year");
    }
    
   
}
console.log(isleapYear(2016));
 */

// function countSundays(){
//     let count = 0;
//     for(let year = 2014; year<=2050; year++){
//         let janFirst = new Date(year, 0, 1);
//         if(janFirst.getDay() === 0){
//             console.log("1st January is being a sunday " + year);
//         }
//     }
//     return count;
// }
// console.log(countSundays());

// function rotateStringRight(str) {
//     let rotatedString = str;

//     let id = setInterval(() => {
//         rotatedString = rotatedString.charAt(rotatedString.length - 1) + rotatedString.slice(0, -1);
//         console.log(rotatedString);
//     }, 1000); // Rotate every second
//     setTimeout(() =>{
//         clearInterval(id);
//     }, 5000)
// }


// rotateStringRight('w3resource');



// let input = prompt(" guess a number");
// let rndnbr = Math.floor(Math.random() * 10)+1;
// while(true){
//     if(input == rndnbr){
//         console.log("Yay You are right, number is :", rndnbr);
//        break;
//     }
//     else{
//         input = prompt("wrong! Retry");
        
//     }
    
// }


let date = new Date();
let today = date.getDate();
let mm = date.getMonth();
let xmas =  new Date(today.getFullYear(),11,25)
let yyyy = date.getFullYear();
console.log(`Today is ${today}/${mm}/${yyyy}`);
let days = 
function daysLeftToChristmas(){

}
