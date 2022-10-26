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


let theName = "ali";
let theLIst = [1, 2, 3, 4, 5];


