// window.alert("Hello From JS file");
// document.write("<h1>hello page</h1>");
// document.createElement("");
// console.log("hello ");
// console.error("error");
// console.table(["ali", "ahmed"]);
// console.log("hello form %cmain %c file", "color:red; font-size:20px;", "color:blue; font-size:30px;");

/* 
console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd(); 
*/

/*
console.log("ali mohamed");
console.log(typeof "ali mohamed");
console.log(typeof 10);
console.log(typeof 10.5);
console.log(typeof [3, 8, 2]);
console.log(typeof ["ali", "ahmed", "mohamed"]);
console.log(typeof { name: "ali", age: 20, country: "egypt" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
*/

/*
var userName = "ahmed";
var age = 24;
console.log(userName);
console.log(userName);
console.log(age);
console.log(hello);
hello.innerHTML = "option";
*/

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

/*
console.log("hello hello \"ali\" \\")

console.log("hello\
hello\
  ali")

console.log("hello\nhello\nali")
*/

/*
let a = "we love";
let b = "javascript";

document.write(a + " " + b)
console.log(a, b)
*/

/*
let a = "ali"
let b = "mohamed"
let c = "ahmed"
let d = "sarah"

console.log(`${a} "" '' \\ ${b}   ${c} 
${d}`)
*/

/*
let theTitle = "ali",
  theDescription = "ali Web School",
  theDate = "25/10";
let myDiv = `
<div class="card">
  <h3>${theTitle}</h3>
  <p>${theDescription}</p>
  <span>${theDate}</span>
</div>

`;
document.write(myDiv.repeat(5));
*/

/*
let numberOne = 10,
  numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);
*/

/*
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
*/

// console.log(" \'I\'m In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n  ++ With ++ \n \\\"\"\" \\\"\"\" \n \"\"JavaScript\"\"``")

/*
let a = 21;
let b = 20;
console.log("_"+a+"_"+b+""+a+"_"+b+""+a+"_"+b+""+a+"_"+b+"_")
*/

/*
console.log(10 + 20 );
console.log(10 + "ali" );
console.log(10 - 20 );
console.log(10 - "ali" );   // >> NaN
console.log( typeof NaN);    // number
console.log(10 * 3);
console.log(2 ** 3);
console.log(10 / 2);
console.log(11 / 2);
console.log(10 % 2);
console.log(11 % 2);
*/

/*
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"ali");
console.log(+"10.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"ali");
console.log(-"10.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("1011"))
*/
/*
let a = 10;
a = a + 20;
a += 20;
a -= 20;
a *= 20;
a /= 20;
console.log(a)
*/
//!
/* 
let a = 10;
let b = "20";
let c = 80;
console.log()

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

console.log(11 + 20 + 80 - 11)
console.log(13 + -21 + 81 - -13 + 14)
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1)
*/

/*
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e);  //2000
console.log(-d + ++g * ++e + ++f);  //173
*/

//!
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400);
// console.log(10 * 20 * 15 % 3 * 190 * 10 * 400);

// let num = 3;
// console.log(num + num);
// console.log(++num + --num - true);
// console.log(num * --num);
// console.log(num * ++num);
// console.log(num + true + --num);
// console.log(++num + num);

// let num = "10"
// console.log(+num + +num);
// console.log(--num + ++num + true);
// console.log(++num + --num - true);
// console.log(++num + --num + --num - ++num);

// let age = 10;
// console.log(++age + ++age - --age + true);  //13
// console.log(--age - true -true );  //8

/*
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(100.0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1000000);
*/

/*
console.log((100).toString());
console.log(100..toString());
console.log(20.555555.toFixed(3));
console.log(parseInt("100"));
console.log(parseInt("100.5"));
console.log(parseFloat("100.5"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(10.5));
console.log(Number.isInteger(100));
console.log(Number.isNaN("ali"));
console.log(Number.isNaN("ali" / 10));
*/

/*
console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.7));

console.log(Math.min(10, 20, 30));
console.log(Math.max(20, 50, 90));

console.log(Math.pow(2, 3));

console.log(Math.random());  // random number

console.log(Math.trunc(99.5));       // Es6
*/

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d =2.4;

// console.log(Math.trunc(Math.min(a,b,c,d)));

// console.log(Math.pow(a, Math.floor(d)));  // 10000

// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(parseInt(d));

// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));  // 66.67
// console.log(Math.trunc(Math.floor(b) / Math.ceil(d)));  // 67

// console.log(Math.trunc(100.56789));
// console.log(parseInt(100.56789.toFixed(2)));

// let flt = 10.4;
// console.log(parseInt(flt));
// console.log(Math.round(flt));
// console.log(Math.trunc(flt));
// console.log(Math.floor(flt));
// console.log(flt.toFixed(0));

// console.log(
//   Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER) **
//     (Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER) **
//       Math.ceil(Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER))
// );

// let num = 10;
// console.log(+Number.isInteger(num) + +Number.isInteger(num));

// console.log(Math.floor(Math.random() * 5));

/*
let theName = "ALI";
let theLIst = [1, 2, 3, 4, 5];

console.log(theName[1]);
console.log(theName.charAt(0));
console.log(theName.length);
console.log(theName.toLowerCase());

let Name = "  ahmed  ";

console.log(Name.trim());
console.log(Name.toUpperCase());

let a = "  ali  ";

console.log(a.trim().charAt(1).toUpperCase());
*/

/*
let b = "ali web school";

console.log(b.indexOf("web"));
console.log(b.indexOf("web", 5));

console.log(b.lastIndexOf("o"));

console.log(b.slice(0, 6)); //! don't include the end
console.log(b.slice(-4, -1)); //! don't include the end

console.log(b.repeat(5));

console.log(b.split(" ", 2))
*/

/*

let a = "ali web school";

console.log(a.substring(1, 5));
console.log(a.substring(5, 1));
console.log(a.substring(-10));      // start form 0
console.log(a.substring(a.length - 5 , a.length - 3));

console.log(a.substr(0, 5));
console.log(a.substr(20));
console.log(a.substr(-3, 4));

console.log(a.includes("web"));
console.log(a.includes("web", 8));

console.log(a.startsWith("a"));
console.log(a.startsWith("a", 3));
console.log(a.startsWith("i",2));

console.log(a.endsWith("a"));
console.log(a.endsWith("b",7 ));
console.log(a.endsWith("eb",7));

*/

/*
let userName = "Elzero";

console.log(userName[0].toLowerCase());
console.log(userName[0].toLowerCase().repeat(3));
console.log(userName.substring(0,1).toLowerCase());
console.log(userName.substr(0,1).toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0,1).toLowerCase());
console.log(userName.slice(3,4));

*/

/*
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.endsWith(letterO.toLowerCase()));

*/

/*
let a = "Elzero Web School";

console.log( a.charAt(2).toUpperCase() + a.slice(3,6));


console.log(a.substr(-4,1).repeat(8).toUpperCase());


console.log(a.split(" ",1));


console.log(`${a.substr(0,6)} ${a.substr(-6,6)}`);


console.log(`${a.charAt(0).toLowerCase()}${a.substr(1,(a.length - 2 )).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`);
console.log(`${a.charAt(0).toLowerCase()}${a.slice(1 , length - 1).toUpperCase()}${a.substr(-1).toLowerCase()}`); 
*/

/*
console.log(10 == "10")  //! compare value only 
console.log(10 != "10")  //! compare value only 

console.log(10 === "10")  //! compare value & type
console.log(10 !== 10 )  //! compare value & type

console.log(10 < 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 >= 10);

//! console.log(typeof"ali" === typeof"ahmed")

console.log(!(10 == "10"));          // not >> !
console.log(10 == "10" && 10 > 8);   // and >> &&
console.log(10 == 3 || 10 == 5);     // or  >> ||

*/
/*
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" != 10); // true
console.log(! 20 == false); // true
*/

/*
let a = 10;
let b = 20;

console.log(a != b); // true
console.log(! (a == b) ); // true
console.log(a < b); // true
console.log(b > a); // true
console.log(a <= b); // true
console.log(b >= a); // true
*/

/*
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a == b) && !(a == b) && !(a == c) && !(a == c)); // true
*/

/*
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "US";
let age = 25;
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "us") {
  if (student === true) {
    price -= discountAmount + 5;
  } else {
    price -= discountAmount;
  }
} else if (age === 10) {
  price -= discountAmount + 15;
} else {
  price -= discountAmount;
}

console.log(price);
*/

/*
  //! consitional (ternary) operator 
  condition ? If True : If False


let theName = "Ali";
let theGender = "Male";
let theAge = 25;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("larger than 60")
  : console.log("unknown");
*/

/*
let price = 0; // 0 or  "" or NUll or Undefined 

console.log(`The Price Is ${price || "no price"}`);
console.log(`The Price Is ${price ?? "no price"}`);  //! return only null and undefined
*/

// let a = 15;

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log(">40")
//   : console.log("unknown");

// let st = "Elzero Web School";

// if ((st.length + st.length).toString() === "34") {
//   console.log("Good");
// }

// if ( st.charAt(st.indexOf("W")).toLowerCase()=== "w") {
//   console.log("Good");
// }

// if (typeof(st) === "string") {
//   console.log("Good");
// }

// if (typeof(st.length) === "number") {
//   console.log("Good");
// }

// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// let num = 9;

// num < 10
//   ? console.log(`00${num}`)
//   : num > 10 && num < 100
//   ? console.log(`0${num}`)
//   : num > 100
//   ? console.log(num)
//   : console.log("unknown");

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1.toString() === str) {
//   console.log("{num1} Is The Same Value As {str}");
// }
// if (num1 !== str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }

// if (num1 !== str2) {
//   console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }

// if (str !== str2) {
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && typeof num3 !== typeof num1) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Type of ${typeof num3} Not The Same Type As type of ${typeof num1}`
//   );
// }
// if(num2 > num1 && num3 == num2 && typeof num3 != typeof num2)  {
// console.log(`${num2} Is Larger Than ${num1} And Value Is The Same As ${num3} And Type of ${typeof num3} Not The Same Type As ${typeof num2}`
// )
// }
// if(num3 !== num1 && typeof num3 != typeof num2 ){
//   console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//   )
// }

// Edit What You Want Here

/*
let num1 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/
/*
// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
*/

/*
let day =  2;

switch (day) {
  case 0:
    console.log("saturday");
    break;
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  default:
    console.log("unknown day");
}
*/

/*
let day = "tuesday";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("no appointment available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM to 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 8:00 AM to 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 7:00 AM to 3:00 PM");
    break;
  default:
    console.log("not a valid day");
}
*/

/*
let job = "Developer";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`MY Salary Is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 9000;
    console.log(`MY Salary Is ${salary}`);
    break;
  case "Developer":
  case "Designer":
    salary = 4000;
    console.log(`MY Salary Is ${salary}`);
    break;
  default:
    console.log(`not a valid title`);
}
*/
/*
holidays = 3;
let money = 0;

if (holidays == 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays == 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays == 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays == 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
*/

/*
let myFriends = ["ali", "ahmed", "mohamed", ["sameh", "mostafa"]];

console.log(`hello ${myFriends[1]}`);
console.log(`hello ${myFriends[1][1]}`);
console.log(`hello ${myFriends[3][1]}`);
console.log(`hello ${myFriends[3][1][2]}`);
//----------------------------------
console.log(myFriends);
myFriends[1] = "sarah";
console.log(myFriends);
myFriends[3] = ["sameh ", "soha"];
console.log(myFriends);
myFriends[3] = "sameh";
console.log(myFriends);
//-----------------------------------
console.log(myFriends.length);  //4
myFriends[6] = "gamal";
console.log(myFriends.length);  //7
console.log(myFriends);

myFriends[myFriends.length] = "new";  // add a new element to the end of the array dynamically 
console.log(myFriends);

myFriends[myFriends.length - 1] = "new-2";    // update an element (the last one in this example) dynamically
console.log(myFriends);

myFriends.length = 2;
console.log(myFriends);
//-----------------------------------
*/
/*
let list = ["ali","ahmed","sarah","mohamed"];
console.log(list);

list.unshift("osama","nabil");
console.log(list);

list.push("ibrahim","sameh");
console.log(list);

let first = list.shift();
console.log(list);
//-------------------------
console.log(`first is ${first}`);
//-------------------------

let last = list.pop();
console.log(list);
//-------------------------
console.log(`last is ${last}`);
//-------------------------
*/

/*
let list = ["ahmed","ali","mohamed","alaa","sayed"];
console.log(list);

console.log(list.indexOf("ali"));
console.log(list.indexOf("ali", 3));
if(list.indexOf("ali",3) === -1){
  console.log("not found")
}
console.log(list.lastIndexOf("mohamed"));
console.log(list.lastIndexOf("mohamed", -4));

console.log(list.includes("ali"));
console.log(list.includes("ali",3));
*/

/*
let list = [10, "ali", "mohamed", "90",1000,100,20,"10",-20,-10,2000];
console.log(list);
console.log(list.sort());
console.log(list.reverse());
console.log(list.sort().reverse());
*/
/*
let list = ["ahmed","ali","mohamed","alaa","sayed"];

console.log(list);
console.log(list.slice());
console.log(list.slice(2));
console.log(list.slice(1,4));
console.log(list.slice(-2));
console.log(list.slice(1,-2));
console.log(list.slice(-4,-2));
console.log(list);   // slice don't change the array
//----------------------------
list.splice(0,0,"sarah");   // start (mandatory) , to remove , add
console.log(list);

list.splice(1,2,"nabil");   
console.log(list);
*/
/*
let list1 = ["ali", "sameh","ahmed","abod","mohamed"];
let list2 = ["sarah","esraa"];
let list3 = ["asmaa","nabil"];

let allLists = list1.concat(list2,list3,"gamal",["1","2"]);
console.log(allLists);

console.log(allLists.join());   // convert to string
console.log(allLists.join(""));
console.log(allLists.join(" # "));
*/

/*
let list = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(list.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
list.pop();
console.log(list);   // ["Ahmed", "Elham", "Osama"];

*/

/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
*/
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();


console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

*/
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
*/
/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle)){
  console.log("found")
}
if( haystack.indexOf(needle)){
  console.log("found")
}
if(haystack[1] === needle){
  console.log("found")
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort();

// Your Code Here

console.log(allArrs.join("").toLowerCase().slice(arr2.length)); // fxy

*/
/*
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
console.log(my.reverse());   // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice( ++zero , counter)); // ["Elham", "Mazero"]
my.splice(0,my.length,"Elzero")
console.log(my.toString()); // "Elzero"
console.log(my.toString().charAt( ++counter ) + my.toString().charAt( ++counter ).toUpperCase() );    // "rO"

*/
/*
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,counter)); // ["Elham", "Mazero"]

my.splice(--zero,++counter,"Elzero")
console.log(my[0]); // "Elzero"
console.log(my[zero].slice(counter,++counter) + my[zero].slice(counter).toUpperCase()); // "rO"
*/

/*
let list = ["Osama","Ahemd","Ali","mohamed","sayed","asmaa"]

for (let i = 0; i < list.length; i++){
  console.log(list[i]);
}
*/

/*
let list = [1, 2, 3, "Osama", "Ahemd", 5, 6,  "Ali", "mohamed", "sayed", "asmaa"];

let names = [];
let nums = [];
for (i = 0; i < list.length; i++)
  if (typeof list[i] === "string") {
    names.push(list[i]);
  }else if (typeof list[i] === "number"){
    nums.push(list[i])
  }

console.log(names);
console.log(nums);
*/
/*
let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
let colors = ["red", "green", "black"];
let models = [2020, 2021];

for (i = 0; i < products.length; i++) {
  console.log(`-//${products[i]}//`);
  console.log("  colors:");
  for(j = 0; j < colors.length; j++){
    console.log(`  * ${colors[j]}`);
  }
  console.log("  models:");
  for(k =  0; k < models.length; k++){
    console.log(`  * ${models[k]}`)
  }
}
*/
/*
let products = ["keyboard", "mouse", 10, 20, "pen", "pad", 40, 60, "monitor"];
let colors = ["red", "green", "black"];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  if (products[i] === "pen") {
    break;
  }
}
console.log("*".repeat(40));
mainloop: for (let i = 0; i < products.length; i++) {
  console.log(`* ${products[i]}`);
  nestedloop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`)
    if (colors[j] === "green") {
      break mainloop;
    }
  }
}
*/

/*
  Loop For Advanced Example
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}
*/

/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["red", "green", "black"];
let showCount = 5;

document.write(`<h1>show ${showCount} products</h1>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3> [${i + 1}] ${products[i]}</h3>`);
  document.write(`<h4>colors:</h4>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

// while(i < products.length){
//   console.log(products[i]);
//   i += 1;
// }

do{
  console.log(i);
  i++;
} while(false);
console.log(i);
*/

/*
let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i += start){
  if(i == exclude){
    continue;
  }
  console.log(i);
}
*/

/*
let start = 10;
let end = 0;
let stop = 3;

for(let i = start; i > end; i-- ){
  if(i < start){
    i = `0${i}`
  }
  console.log(i);
  if(i === `0${stop}`){
    break;
  }
}
*/

/*
let start = 1;
let end = 6;
let breaker = 2;

for(let i = start; i <= end; i++){
  console.log(i)
  console.log("--"+breaker)
  console.log(`-- ${end - breaker}`)
}
*/
/*
let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  if(index == jump) continue;
  console.log(index);
  index -= 2;
  if (index === end) break;
}
*/

/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

i = friends.length - friends.length;
counter = letter.length;
for (; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`"${counter} => ${friends[i]}"`);
  counter++;
}
*/

/*
let start = 0;
let swappedName = "elZerO";
let str ="";
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    str += swappedName[i].toLowerCase();
  } else {
    str += swappedName[i].toUpperCase();
  }
}
console.log(str);

/////////////////////////////////////////

let hello = "hElLO";
let newWord = [];

for (i=0; i<hello.length; i++) {
  if (hello[i] == hello[i].toLowerCase()) {
      newWord[i] = hello[i].toUpperCase();
  }
  else {
    newWord[i] = hello[i].toLowerCase();
  }
}
console.log(newWord.join(""));
*/

/*
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i = start; i < mix.length; i++){
  if (typeof mix[i] == "string" || mix[i] == mix[start]) continue;
  console.log(mix[i]);
}
*/

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let i = 0;
// let counter = 0;

// for(let i = index; i < friends.length; i++){
//   if( typeof friends[i] == "number" || friends[0].charAt(0) === friends[i][0] ){
//     continue;
//   }
//   console.log(`"${++counter}=>${friends[i]}"`);
// }

// while (i < friends.length) {
//     if( typeof friends[i] == "number" || friends[0].charAt(0) === friends[i][0] ){
//       i++;
//       continue;
//   }
//   console.log(`"${++counter}=>${friends[i]}"`);
//   i += 1;
// }
/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
document.write(`<div>WE Have ${myAdmins.indexOf("Stop")} Admins</div>`);
myAdmins = myAdmins.slice(0, myAdmins.indexOf("Stop"));
let i = 0;
let counter1 = 1;

for (; i < myAdmins.length; i++) {
  document.write(
    `<hr><h2>the admin for team ${counter1} is ${myAdmins[i]} </h2>`
  );
  ++counter1;
  document.write(`<h3>Team Members:</h3>`);
  let counter2 = 1;
  let j = 0
  for (; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      document.write(`<p>-${counter2}  ${myEmployees[j]}</p>`);
      ++counter2;
    } else {
      continue;
    }
  }
}
*/
/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];

// let i = 0;
// for (; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     break;
//   }
// }
// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>We Have ${i} Admins</div>`);

// i = 0;
// for (; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") break;
//   document.write(`<hr>`);
//   document.write(`<div>The Admins For Team ${i + 1} Is ${myAdmins[i]}</div>`);
//   document.write(`<h3>Team Members:</h3>`);
//   let j = 0;
//   let counter = 0;
//   for (; j < myEmployees.length; j++) {
//     if (myEmployees[j][0] === myAdmins[i][0]) {
//       document.write(`<p>- ${counter + 1} ${myEmployees[j]}</p>`);
//       counter++;
//     } else {
//       continue;
//     }
//   }
// }

/*
function sayHello(userName, age){
  if(age < 20){
    console.log("app is not suitable for you")
  }else{
    console.log(`Hello ${userName} Your age is ${age}`)
  }
}

sayHello("ali",30);
sayHello("osama",18);


function generateYears(start,end, exclude){
  for(let i = start; i <= end; i++ ){
    if(i === exclude) continue;
    console.log(i);
  }
}

generateYears(1998, 2022, 2020);

*/
/*
function calc(num1,num2){
  return num1 + num2;
}
let result = calc(10,20);
console.log(result);

function generate(start,end){
  for(let i = start; i <= end; i++){
    console.log(i);
    if(i === 15){
      return `interrupting`;
    }
  }
}
generate(10,20);
*/
/*
function sayHello(userName, age = "unknown"){
  // if(age === undefined){
  //   age = "enter a number please,";
  // }
  // age = age || "unknown";
  return `Hello ${userName} Your Age Is ${age}`;
}
console.log(sayHello("ali"))
*/
/*
function calc(...num){
  let sum = 0;
  for(let i = 0; i < num.length; i++){
    sum += num[i];
  }
  return `result is ${sum}`;
}
console.log(calc(10,20,40,30,50))
*/
/*
function show(
  user = "unknown",
  age = "unknown",
  rate = 0,
  show = "Yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${user}</h2>`);
  document.write(`<P>Age :${age}</P>`);
  document.write(`<P>Hour Rate : $${rate}</P>`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<P>Skills :</p>`);
      for(let i = 0; i < skills.length; i++){
        document.write(`<P>${skills[i]}</p>`);
      }
    } else {
      document.write(`<P>No Skills</P>`);
    }
  } else {
    if (skills.length > 0) {
      document.write(`<P>Skills is hidden</P>`);  
    }else{
      document.write(`<P>No Skills</P>`);
    }
    document.write(`</div>`);
  }
}
show("Ali", 24, 60, "Yes","html","css","JavaScript");
*/
/*
function say(name, gender = "") {
  if (gender === "Male") {
    console.log(`Hello Mr ${name}`);
  } else if (gender === "Female") {
    console.log(`Hello Mrs ${name} `);
  } else {
    console.log(`Hello ${name}`);
}
}

say("Osama", "Male"); // "Hello Mr Osama"
say("Eman", "Female"); // "Hello Miss Eman"
say("Sameh"); // "Hello Sameh"
*/
/*
function calculate(firstNum, secondNum, operation = "add") {
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    if (operation === "add") {
      result = firstNum + secondNum;
    } else if (operation === "subtract") {
      result = firstNum - secondNum;
    } else if (operation === "multiply") {
      result = firstNum * secondNum;
    }
  } else if (secondNum === undefined) {
    result = "second number is not found";
  }
  console.log(result);
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
*/
/*
function ageInTime(theAge) {
  if(theAge <= 10 || theAge >= 100){
    console.log("Age Is Out Of Range");
  }else{
    console.log(`months : ${theAge * 12} `);
    console.log(`weeks : ${theAge * 12 *4}`);
    console.log(`days : ${theAge * 12 * 30}`);
    console.log(`hours : ${theAge * 12 * 30 * 24}`);
    console.log(`minutes : ${theAge * 12 *4*30*60}`);
    console.log(`seconds : ${theAge * 12 *4*30*60*60}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

*/
/*
function createSelectBox(startYear, endYear) {

  document.write(`<select>`);
  for(let i = startYear; i <= endYear; i++){
    document.write(`<option value="${i}">${i}</option>`)
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2020);
*/

/*

function multiply (...num){
  let sum = 1;
    for(let i = 0; i < num.length; i++){
      if(typeof num[i] !== "number") continue;
      sum = parseInt(num[i])*sum;
    }
  console.log(sum);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

*/

//! good example
/*
function checkStatus(a, b, c) {
  let list = [a, b, c],
    name,
    age,
    status;
  for (let i = 0; i < list.length; i++) {
    typeof list[i] === "string"
      ? (name = list[i])
      : typeof list[i] === "number"
      ? (age = list[i])
      : typeof list[i] === "boolean"
      ? (status = list[i])
      : "";
  }
  if (status === true) {
    console.log(
      `Hello ${name}, Your Age Is ${age}  , You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}  , You Are NOt Available For Hire`
    );
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus("Osama", false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/
//! good example

/*
console.log(calc(10,20));
function calc(num1,num2){
  return num1 + num2;
}

//! anonymous function 
// 

let calculator = function(n1,n2){
  return n1*n2;
}
console.log(calculator(10,20));
*/
/*
//! nested function 
function sayMessage(fName,lName){
  let message = "Hello";

  //nested function
  function concatMsg(){
    function getFullName(){
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}
console.log(sayMessage("Ali","Elnagar"));
*/
/*
//! Arrow Function : 

// let print = function () {
//   return 10;
// };

//! in case one statement we can remover braces and return
// let print =  () => 10;

// let ali = num => num;   // remove parentheses in case of one parameter

// let print2 =  (num,num2) => num + num2;

console.log(ali(30));
console.log(print2(40,30));
*/
/*
function parent(){
  let a = 10;
  function child(){
    console.log(a);
  }
  child();
}
parent();

*/
/*
function getDetails(name, age, country) {
  function namePattern(){
    return `${name.split(" ",2)[0]} ${name.split(" ",2)[1].charAt(0).toUpperCase()}.`;
  }
  function ageWithMessage() {
    return `Your Age Is ${age.split(" ")[0]}`;
  }
  function countryTwoLetters() {
    return `You Live In ${country.slice(0,2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`;
  }
  return fullDetails();

}

console.log(getDetails("Ali shokri", "38 Is My Age", "tunisia"));

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
*/

/*
let itsMe = () => `Iam A normal Function`;
console.log(itsMe());



let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));

*/

/*
let  checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("sarah")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/
/*
function specialMix(...data) {
  let sum = 0;
  for(let i = 0; i < data.length; i++){
    if (parseInt(data[i])){
      sum += parseInt(data[i]);
      }
    else{
    continue;
    }
  }
  if( sum == 0 ){
    return `all are strings`
  }
  return sum ;
}
console.log(specialMix(10, 20, 30,"ali")); // 60
console.log(specialMix("10Test", "Testing", "20Cool", 50)); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

*/
/*
let names = (...list) =>`String [${list.join("], [")}] => Done!`;
console.log(names("ali","mohamed","sarah","sameh","mostafa"))
*/

/*
let myNumbers = [20,50,10,60];

function calc ( one,two,...nums) {
  return one + two + nums[0];
}
console.log(calc(10, myNumbers[1],myNumbers[0]));
*/

// let myNums = [1,2,3,4,5,6];

// let newArray = [];

// for ( let i =0; i < myNums.length; i++){
//   newArray.push(myNums[i] + myNums[i])
// }
// console.log(newArray);
// with map

// let addSelf = myNums.map(function(element, index, arr){
//   return element + element;
// })
//convert to arrow function
// let addSelf = myNums.map((element) => element + element);
// console.log(addSelf);

// function addition(ele){
//   return ele + ele;
// }

// let add = myNums.map(addition);
// console.log(addSelf);
/*
let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map(function (a) {
    return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
  })
  .join("");

console.log(sw);
///////////////////////////////////////
let inv = invertedNumbers.map((b) => b * -1);
console.log(inv);
///////////////////////////////////////
let ig = ignoreBooleans
  .split("")
  .map((c) => (isNaN(parseInt(c)) ? c : ""))
  .join("");
console.log(ig);
////////////////////////////////////////////
*/
/*
let friends = ["ahmed", "ali", "sameh", "osama", "mohamed"];

let friendsFilter = friends.filter(function (el) {
  return el.startsWith("a");
});
console.log(friendsFilter);

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (n) {
  return n % 2 === 0;
});

console.log(evenNumbers);
*/
/*
let sentence = "I Love Foood Code Too playing Much";
let smallWords = sentence.split(" ").filter(function(ele){
  return ele.length <= 4;
}).join(" ");
console.log(smallWords);

/////////////////////////////////////////////////////////

let Mix = "A13BS2ZX";

let arr = Mix.split("").filter(function(a){
  return ! isNaN(parseInt(a));
}).map(function(b){
  return b * b;
}).join(" // ")
console.log(arr);
*/


