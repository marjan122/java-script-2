// js 21-25 (1)

// var firstName = prompt("Enter Your FirstName");
// var lastName = prompt("Enter Your LastName");
// alert("Welcome Mr " + firstName  +  lastName);

// js 21-25 (1)

// js 21-25 (2)

//     var text = prompt();
// var textlenght = text.length;
// alert("My Favourite Phone : " + textlenght);


// js 21-25 (2)

// js 21-25 (3)

// var country = "Pakistani";
// var text = country.indexOf("n");
// alert("String : Pakistani , " + "Last index of 'n' is : " +  text);

// js 21-25 (3)

// js 21-25 (4)

// var country = "Hello World";
// var text = country.lastIndexOf("l");
// alert("String : Hello World , " + "Last index of 'l' is : " +  text);

// js 21-25 (4)


// js 21-25 (7)
// var text = "hyderabad";
// text = text.replace("hyderabad","Islamabad");
// console.log(text);

// js 21-25 (7)

// js 21-25 (8)

// var text = "“Ali and Sami are best friends. They play cricket and football together.”";
// text = text.replace("and","&");
// console.log(text);

// js 21-25 (8)

// js 21-25 (10)

// var text = prompt();
// var name = text.toUpperCase();
// alert(name);

// js (10) 

// js 21-25 (14)


// var itemsToCheck = prompt("Enter your FoodItem");
// itemsToCheck = itemsToCheck.toLowerCase();
// var availiableItems =["cake", "apple pie", "cookie", "chips" , "patties"];
// for (var i = 0; i <= 8; i++) {
// if (itemsToCheck === availiableItems[i]) {
//     alert("It is availiable");
// }
// }  
//     alert("It is not avaiable");

// js 21-25 (14)

// js 21-25 (17)
// var text = prompt();
// var letter = text.charAt(text.length-1);
// alert(letter);

// js 21-25 (17)

// js 26-30 (1)

// var num = 3.45214;
// num =Math.round(3.45214)
// num2 =Math.ceil(3.45214)
// num3 =Math.floor(3.45214)
// console.log(num,num2,num3);

// js 26-30 (1)

// js 26-30 (2)

// var num = -3.45214;
// num4 =Math.round(-3.45214)
// num5 =Math.ceil(-3.45214)
// num6 =Math.floor(-3.45214)
// console.log(num4,num5,num6);

// js 26-30 (2)

// js 26-30 (3)

// var num = -3;
// num =Math.abs(-3)

// console.log(num);

// js 26-30 (3)

// js 26-30 (4)

// var dice = Math.floor( Math.random() *6  ) +1;
// alert(  "You Dice Value is  " + dice);

// js 26-30 (4)

// js 26-30 (5)

// var toss = Math.floor( Math.random() *2  ) +1;
// alert(  "Your Coin Value is : " + toss);

// js 26-30 (5)

// js 26-30 (6)

// var number = Math.floor( Math.random() *100  ) +1;
// alert(  "Your Number is between 1 and 100 is :  " + number);

// js 26-30 (6)

// js 26-30 (7)

// var weight = prompt("Enter Your Weight ");
// alert(  "The Weight Of The User Is :  "  + weight + " Kilograms");

// js 26-30 (7)

// js 26-30 (8)
// var numbers = prompt("Enter your Number");
// var CongratsNumbers =["7", "5", "9",];
// for (var i = 0; i <= 4; i++) {
// if (numbers === CongratsNumbers[i]) {
//     alert("Congratulations You Select The Right Number ");
// }
// }  

// js 26-30 (8)

// js 31-34 (1)

// var now = new Date ();
// console.log(now);

// js 31-34 (1)

// js 31-34 (2)


// var currentDate = new Date ();
// var month = currentDate.getMonth();

// console.log(month);

// js 31-34 (2)

// js 31 - 34 (3)

// var day = prompt();
// switch (day){

//     case "mon":
// alert("Monday");
//     break;
//         case  "tue":

//         alert("Tuesday");
//       break;   
//       case "wed":
//         alert("Wednesday");
//             break;
//                 case  "thu":
        
//                 alert("Thursday");
//               break;   
//               case "fri":
//                 alert("Friday");
//                     break;
//                         case  "sat":
                
//                         alert("Saturday");
//                       break;   
                        
//                       case  "sun":
                
//                         alert("Sunday");
//                       break;   

//                     }

// js 31 - 34 (3)

// js 31 - 34 (4)

// var day = prompt();
// switch (day){

//     case "sat":
// alert("Funday");

// break;
// case "sun":
//     alert("Funday");
    
// }

// js 31 - 34 (4)

// js 31 - 34 (5)

// var date = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 , 15";

// alert(date + "(Last day of the month)");

// js 31 - 34 (5)


// js 31 - 34 (6)

// var now = new Date ();
// var milisec = now.setMilliseconds(1970);
// var min = now.setMinutes(1970);
// console.log(now);
// console.log(milisec);
// console.log(min);

// js 31 - 34 (6)

// js 31 - 34 (8)

// var date = new Date();
// var setdate = date.setDate(31)
// var year = date.setFullYear(2020);
// var months = date.setMonth(11);
// var seconds = date.setSeconds(00);
// var minutes = date.setMinutes(00);
// var hours = date.setHours(00);
// console.log(date);

// js 31 - 34 (8)

// js 31 - 34 (10)

// var date = new Date ();
// var seconds = date.setSeconds(2015);
// console.log(seconds);

// js 31 - 34 (10)


// js 31 - 34 (11)

// var date2 = new Date(); 
// console.log(date2);


// var date = new Date();
// var setdate = date.getDate();
// var year = date.getFullYear();
// var months = date.getMonth();
// var seconds = date.getSeconds();
// var minutes = date.getMinutes();
// var hours = date.setHours(22);
// console.log(date);

// js 31 - 34 (11)


// js 31 - 34 (12)

// var date2 = new Date(); 
// console.log(date2);


// var date = new Date();
// var setdate = date.getDate();
// var year = date.setFullYear(1921);
// var months = date.getMonth();
// var seconds = date.getSeconds();
// var minutes = date.getMinutes();
// var hours = date.getHours();
// console.log(date);

// js 31 - 34 (12)

// js 35 - 38 (1)

// var date = new Date ();
// console.log(date);

// js 35 - 38 (1)

// js 35 - 38 (2)

// var firstName = prompt("Enter Your FirstName");
// var lastName = prompt("Enter Your LastName");
// alert("Welcome Mr " + firstName  +  lastName);

// js 35 - 38 (2)

// js 35 - 38 (3)

// var num1 = prompt("Enter First Amount");
// var num2 = prompt("Enter Second Amount");

// var sum = num1 + num2;

// alert(sum);

// js 35 - 38 (3)

// js 35 - 38 (3)

var number = (prompt('Enter a positive integer: '));
    console.log(number);
