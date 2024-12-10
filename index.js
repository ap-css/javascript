const accountId = 1223
// account id = 23
console.log(accountId);
let accountEmail = "abhinav22@gmail.com"
var accountPass = "435trs"
let accountState;
accountCity = "jaipur"

/*
never use var due to block scope and fucntional scope, prefer const and let only also dont declare variable without keyword like in accountCity
*/

accountEmail = "suraj34@gmail.com"
accountPass = "676tc"
accountCity = "pune"

console.table([accountId, accountEmail, accountPass, accountCity, accountState])

/*
DATA TYPES IN JS

number : 2 to power 53
bigint
string : ""
boolean : true/false
null : standone value
undefined 
symbol : unique
object

*/

console.log(typeof undefined)
console.log(typeof null)

let score = "33abc"
console.log(typeof score);

// to convert string to number

let valueInNumber = Number(score)
console.log( typeof valueInNumber);
console.log(valueInNumber);

/*

"33" : 33
"33abc" : Nan
true : 1 ; false :0

*/

let isLoggedIn = "user"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

/*

1 : true ; 0 : false
"" : false
"filled" : true 

*/

let str1 = "hello"
let str2 = " abhinav"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 
//better way to represent is using paranthesis
console.log((3 + 4) * 5 % 3);

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
// If used postfix, with operator after operand (x++), the increment operator increments and returns the value before incrementing.

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// If used prefix, with operator before operand ( ++x), the increment operator increments and returns the value after incrementing.



console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*

the reason is that equality check (==) & comparisons ( > < >= <=) work differently
comparisons convert null to zero that is why 3rd case is true and 1st case is false
so avoid these codes

*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2); // strict comparison which also compares the data type not only values

// PRIMITIVE DATA TYPES : string, number, Boolean, null, undefined, symbol, bigint
// NON-PRIMITVE DATA TYPES ( REFERENCE) : array, objects, functions

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id == anotherid);

// in symbol values of variable might be same but the return value will be different 

const students = ["aman", "amar", "anurag"]; // array
console.log(students);

let myObj = {
    name : "abhinav", // object
    age : 20,         // object
}
console.log(myObj);

const myFunction = function(){        //function
    console.log("hello abhinav");
}
myFunction();   // returns value

/* Return value of datatypes using console.log(typeof ___);

1)  Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2)  Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function also known as object function 
       Object  =>  object

*/


/*

Memory are of two types 

1) Stack (primitive)     : gives copied value
2) Heap (non-primitive)  : gives reference value i.e, original value 

*/

// stack example 

let myname = "abhinav"
let anothername = myname
anothername = "deadline"
console.log(myname);
console.log(anothername);

// heap example 

let userone = {
    email : "abhi67@gmail.com",
    upi : "abhi@sbi",
}
let usertwo = userone
usertwo.email = "ap45@gyahoo.com"
console.log(userone.email);
console.log(usertwo.email);

// to add strings using ` method 

const name = "abhinav"
const repocount = 50
console.log(`hello my name is ${name} and my reposiorty count is ${repocount}`);

// another method to declare strings

const gamename = new String('clashofclans')

// string methods 

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('h'));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherstring = gamename.slice(-11, 8)
console.log(anotherstring);

const newstringone = "   abhinav   "
console.log(newstringone.trim());   // removes extra spaces 

const url = "https://google.com/abhinav69patil"
console.log(url.replace('69', '-'));
console.log(url.includes('abhi'));

const game = new String('clash-of-clans')
console.log(game.split('-'));  // string to array 

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());   // number to string
console.log(balance.toFixed(2));   // provides precision

const anothernumber = 123.968
console.log(anothernumber.toPrecision(3));  // for exact precision of no

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // used for representing big no in indian form

console.log(Math);
console.log(Math.abs(-4));     // -ve to +ve 
console.log(Math.round(4.6));  // most used
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4 ,3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // generates random value bw 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);  // for better optimized result 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min-1)) + min); // standard formula 

let mydate = new Date()
console.log(mydate);   // confusing representation

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);


let mycreatedDate = new Date(2024, 0, 26, 8, 3)   // used when there is need to specify need
console.log(mycreatedDate.toLocaleString());

let mynewDate = new Date("06-14-2004")   // another format
console.log(mynewDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); 
console.log(mycreatedDate.getTime());  // from specific date
console.log(Math.floor(Date.now()/1000));  // in seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{              // more customization toLocaleString
    weekday: "long",  
    hour: "numeric",
    day: "2-digit"
})
console.log(newDate.toLocaleString());

const myArr = [1,4,7,9]
const myArrr = new Array(1,2,4,6)  // declaration of array 2nd type
console.log(myArr);
console.log(myArrr);

// array methods 

myArr.push(8)   // insert element into the last
myArr.push(5)
console.log(myArr);
myArr.pop()     // removes last element 
console.log(myArr);
myArr.unshift(2)
console.log(myArr);  // insert element in first
myArr.shift()
console.log(myArr);  // removes first element

console.log(myArr.includes(3));
console.log(myArr.indexOf(10));

const newArr = myArr.join()  // converts array to string 
console.log(newArr);

// slice and splice : main diff is that in splice the original array gets manipulated 

console.log("A:", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B:",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C:",myArr);

const marvel = ["thor", "spidy", "iron"]
const dc = ["super", "flash", "bat"]
const all = marvel.concat(dc)             // use this instead of push opn
console.log(all);

const allheroes = [...marvel,...dc]      // spread opn better then concat
console.log(allheroes);

const anotherarr = [1,2,[3,4,5],7,[6,8,9],10]
const usablearr = anotherarr.flat(Infinity)     // used when there are nested arrays 
console.log(usablearr);

console.log(Array.isArray("abhinav"));
console.log(Array.from("abhinav"));      // converts any type to array

console.log(Array.from({name: "abhinav"}));  // cannot convert directly

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


// objects % symbols

const mySym = Symbol("key1")

const Juser = {
    name : "abhinav",
    "full name" : "abhinav patil",
    [mySym] : "mykey1",                // declare symbol inside an object
    age : 20,
    location : "bglr",
    lastlogin : ["monday","thursday"]
}

// methods to print objects

console.log(Juser.name);
console.log(Juser["name"]);        
console.log(Juser["full name"]);
console.log(Juser[mySym]);

Juser.name = "deadline"   // changes the value
// Object.freeze(Juser)      // no update can be done
Juser.name = "dork"
console.log(Juser);

// how to use objects inside function

Juser.greeting = function(){
    console.log(`Hello user, ${this.name}`);    // this operator can access the object methods
    }
    console.log(Juser.greeting());
    
// singleton object 

const tinderuser = new Object()
tinderuser.id  = "sam123"
tinderuser.name = "sammmy"
tinderuser.isloggedout = false
console.log(tinderuser);

// nested objects 

const regularuser = {
    email : "dork56@gmail.com",
    fullname : {
        userfullname : {
            firstname : "dead",
            lastname : "dork"
        }
    }
}
console.log(regularuser.fullname.userfullname.lastname);


// to combine objects 

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj3 = { 5:"a", 6:"b"}
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

// many objects in an array 

const users = [
    {
        id : 1,
        gmail : "nks@gmail.com"
    },
    {
        id : 1,
        gmail : "nks@gmail.com"
    },
    {
        id : 1,
        gmail : "nks@gmail.com"
    },
]
console.log(users[1].gmail);

// to find key and value pair 

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.hasOwnProperty('isLoggedIn'));

// object destructuring 

const course = {
    coursename : "javascript",
    price : 999,
    teachername : "hitesh"
}

const {teachername: guru} = course    // instead of using console.log(course.teachername)
console.log(guru);
















































 

















