let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}


function clearDisplay(){
  expression = '';
  document.getElementById('display').value=expression;
}
// function clearDisplay() {
//   expression = '';
//   document.getElementById('display').value = expression;
// }

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

var a = ['nnn',45,'hdhd',true,12.4]
a[1]='jjj'
console.log(a[1])
a[1]=55
console.log(a[1])
console.log(a.length)

var person = {
  fname:'nnn',age:50,
  friend:['ddd',12,'ggg'],
  city:{
    name:'ffff',
    age:45,
    hoobby:'cric'
  }

}

for(var col in person){
  console.log(col +'->'+ person[col])
}

console.log(person.fname)
console.log(person['fname'])
console.log(person['city']['name'])

console.log(person.city.name)

d  = [1,2,3]
d.shift()
console.log(d)
d.unshift(1)
console.log(d)

var aaa=1;
if(aaa>2){
  console.log(2)
}else{
  console.log(1)
}

arr = []

dd = [1,2,3,6,4]

// for loop
for(var i=0;i<=dd.length;i++){
  if(a = 1)
  console.log(arr.push(i**2))
  else
  console.log(a)
}
console.log(arr)
// while loop
a = 1
while(a == 1){
  console.log(a)
  break;
}
// do while loop once get executed then checks condition
do{
  console.log('hi')
  i++
}while(i<10)
// for in loop for objects used this one

var person = {
  fname:'nnn',age:50,
  friend:['ddd',12,'ggg'],
  city:{
    name:'ffff',
    age:45,
    hoobby:'cric'
  }

}
// here col targets to key name
for(var col in person){
  console.log(col +'->'+ person[col])
}
// for of loop for target array literals here co targets to value
per = [1,5,6,4,6]
for(var co of per){
  console.log(co)
}

for(var[index,coll] of per.entries()){
  console.log(index+'->'+coll)
}
let num1=2;
let num2=02;
if(num1==num2)
 console.log("true");
else
 console.log("false");

var num = 105;
if( num%5 == 0 )
 console.log("divisible by 5")
else
 console.log("not divisible by 5")

 for(let i = 10; i >= 0 ; i--){
  console.log(i);
  
 }
//  output is reverse number print

 for(let i = 10; i >= 10 ; i--){
  console.log(i);
 }
//  output is 10

function checkAge(data) {
  if (data === { age: 18 }) {
  console.log("You are an adult!");
  } else if (data == { age: 18 }) {
  console.log("You are still an adult.");
  } else {
  console.log(`Hmm.. You don't have an age I guess`);
  }
 }
 
 checkAge({ age: 18 });
// output is Hmm.. You don't have an age I guess 

 num1=3;
function cal() {
num1=6;
num2=5;
num3=num2*num1;
console.log(num3);
}
cal();
// output is 30

function Add(){
  console.log(answer)
  var answer = 2
};
Add()
// output is undefined because hoisting takes place
function fn(){
  return 4+5;
 }
 fn(3,7);
//  output is nooutput

var f = 0;
f = 5;
console.log(f)
// output is 5

let arrr = [1,'2','3','4']
let [h,s,o,k] = arrr
console.log(h)
// output is 1

const obj5 = { foo: 1 }
obj5.bar = 2

console.log(obj5)
// output is { foo: 1, bar: 2 }
console.log(typeof (new (class { class () {} })))
// output is object

// functional programming 
// imperative v/s declarative
// imperative
const hoo = 4
let iseven;
if(hoo % 2==0){
  iseven=true
}else{
  iseven=false
}
console.log(iseven)
// instead of writing like this write in declarative way
// example using ternary operator
// declaritive
const check=(x)=> (x%2==0? true:false)
console.log(check(2))
// pure and impure function
// pure function given same input and output


let aaaa= 12
const nnnn=(xxx)=>{
  console.log(xxx+aaaa)
}
nnnn(12)

// callback functions
function good(daily,cb){
  console.log(daily)
  cb('3')
}
good('jjj',names)
function names(name){
  console.log(name)
}
// output is jjj
// 3
// advanced example

const isEven = (n)=>{
  return n%2==0
}
const results=(evenfn,num)=>{
  const isNumeven = evenfn(num)
  console.log(`the number ${num} is an even number is ${isNumeven}`)
}
results(isEven,2)
// output is the number 2 is an even number is true

// higher order function
let arr9 = [12,5,5,3]

// in order to push the squre of the return in above arr array 
// we can use hof for return in shortcut without using  push format
// we now use map function this return new array 
 
const mapping = arr9.map(function(n){
  return n*n
})
console.log(mapping)
// output is [ 144, 25, 25, 9 ]

// foreach loop this outputs the values and does not return new array

const mappi = arr9.forEach(function(n){
  console.log(n*5)
})
// output is 
// 12
// 5
// 5
// 3
// forEach does not return array instead gives only values

// find,findIndex,some and every

// using find only finds and outputs one only
const mappig = arr9.find(function(n){
  return n<10
})
console.log(mappig)
// o/p is 5
// filters give new array checks the condition and o/p 
// the satisfied condition values output inarr format
let gggooo=[4,5,6,8]
const nnnnn=gggooo.filter(function(n){
  // return n%2 == 0;
  return n<5;
})
console.log(nnnnn)

// output is [ 4 ]

// reduce function
// for example using reduce instead of loop for sum of all elements in array
let ii = [2,4,5,8,6,7]

let result = ii.reduce(function(acc,value){
  let update = acc+value;
  return update
},0)
console.log(result)
// o/p is 32

// chaining method to add methods continuous


let demoobj = [  {namess:"rnuj"},{namess:"hhhh"},{namess:"hhhhgggg"}
]

let namesss = demoobj.filter(function(obj){
  return obj.namess
}).map(function(oobj){
return oobj.namess
})

console.log(namesss)
// o/p is [ 'rnuj', 'hhhh', 'hhhhgggg' ]

// constructor in js
function BBB(_names, _std) {
  this.name = _names;
  this.std = _std;
  this.drive = function(){
    console.log(`i am driving${this.name} even i am ${this.std}`)
  }
}
let stu = new BBB('madhu','Asec')

stu.drive() 

// o/p is i am drivingmadhu even i am Asec

// classes in javascript

class Person{
  constructor(_names,_age) {
    this.names = _names;
    this.age = _age;
  }
  welcome(){
    console.log(`${this.names}`)
  }
}

let Person1 = new Person('mad',19)
console.log(Person1)
Person1.welcome()
// o/p is Person { names: 'mad', age: 19 }


class Inheritance extends Person{
  constructor(_names,_age,_std){
    super(_names,_age);
    this.std = _std;
  }
}

let Person2 = new Inheritance('madhu',19,10);
console.log(Person2);
Person2.welcome()
// o/p is Inheritance { names: 'madhu', age: 19, std: 10 }

// call function
let Person4 = {
  fname:'steve',lname:'roggers',age:12,
  printDetails : function(){
    console.log(`hi ${this.fname}`)
  }
}

let Person3 = {
  fname:'fff',lname:'kkkk',age:52,
}

Person4.printDetails.call(Person3)
Person4.printDetails()
// o/p is hi fff  hi steve

let personstark = function(city,power){
  console.log(`${this.fname} and ${city} and ${power} `);
}
personstark.apply(Person3, ['ddddd', 'dsdaadfg']); 
personstark.call(Person3, 'ddddd', 'dsdaadfg');
// o/p is fff and ddddd and dsdaadfg
// bind allow function on different the variable

let myfun = personstark.bind(Person3,'Madhu','lion')
console.log(myfun)
myfun()