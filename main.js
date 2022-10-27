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
