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