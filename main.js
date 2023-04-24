/*1. Напиши скрипт, який перевіряє змінну «х» на на-
лежність діапазону 0..100 (наприклад, 10 — належить,
-10 — не належить, 0 — належить, 200 — не належить).*/


// const x = +prompt('Enter a number');
// if (x >= 0 && x <= 100){
//     alert('Ok!');
//     console.log('Ok');
// }
// else {
//     alert('No!');
//     console.log('No!');
// }


/*2. Напиши скрипт, який порівнює змінні «х» та «у»
і виводить одне з повідомлень: «x > y», «x < y» або
«x=y» залежно від значень змінних.*/

// const x = +prompt('Enter first name');
// const y = +prompt('Enter second name'); 

// if (x > y){
//     alert('x > y');
// }
// else if (x < y){
//     alert('x < y');
// }
// else if (x = y){
//     alert('x = y');
// }


/*3. Напиши скрипт, який «ранжує» змінну «х»: виво-
дить її належність діапазонам 0..100, 101..200, 201..300
або невідповідність жодному з них (наприклад, 30
належить діапазону 0..100; 250 — діапазону 201..300;
-10 або 500 — жодному).*/

// const x = +prompt('Enter a number');
// if (x >= 0 && x <= 100){
//     alert('Your number is in the range from 0 to 100');
// }
// else if (x >= 101 && x <= 200){
//     alert('Your number is in the range from 101 to 200');
// }
// else if (x >= 201 && x <= 300){
//     alert('Your number is in the range from 201 to 300');
// }
// else {
//     alert('Your number does not belong to any of the ranges'); 
// }

/*4. Напиши скрипт, який аналізує змінну «х» та виво-
дить назву цифри: 0-«нуль», 1-«одиниця», 2-«двійка»
тощо. Якщо змінна не є цифрою, виводиться пові-
домлення «не цифра».*/

// const x = +prompt('Enter a number from 0 to 10');

// if (x === 0){
//     alert('zero');
//     console.log('zero')
// }
// else if (x === 1){
//     alert('one');
//     console.log('one')
// }
// else if (x === 2){
//     alert('two');
//     console.log('two')
// }
// else if (x === 3){
//     alert('three');
//     console.log('three')
// }
// else if (x === 4){
//     alert('four');
//     console.log('four')
// }
// else if (x === 5){
//     alert('five');
//     console.log('five')
// }
// else if (x === 6){
//     alert('six');
//     console.log('six')
// }
// else if (x === 7){
//     alert('seven');
//     console.log('seven')
// }
// else if (x === 8){
//     alert('eight');
//     console.log('eight')
// }
// else if (x === 9){
//     alert('nine');
//     console.log('nine')
// }
// else if (x === 10){
//     alert('ten');
//     console.log('ten')
// }
// else {
//     alert('Not a number!')
//     console.log('Not a number!')
// }

// Цикли

/*1. Напиши скрипт, який запитує у користувача число
N і виводить усі парні числа від 2 до N.*/

// const userNumber = prompt('Enter a number');
// for (let i = 2; i <= userNumber; i++){
//     if (i % 2 === 0){
//         alert(i);
//     }
// }

/*2. Напиши скрипт, який запитує у користувача число
N і виводить усі непарні числа від N (або N-1, якщо
N парне) до 1 у порядку спаду.*/

// const userNumber = prompt('Enter a numbr');
// for (let i = userNumber; i <= userNumber && i > 0; i--){
//     if (i % 2 === 0)continue;
//         alert(i);
//     }


/*3. Напиши скрипт, який запитує у користувача число
N і виводить усі числа, на які ділиться N, включаючи
195 
число 1 (приклади: введення N=10, висновок 1, 2, 5;
введення 11, виведення 1).*/
// const userNumber = ('Enter a number');

// 4. Через витік із бака охолодження щодня витікає 10%
// налитої води. При об’ємі води менше, ніж 10 літрів
// виникає аварійна ситуація. Створи програму, яка
// запитує у користувача початковий обсяг води і роз-
// раховує, на скільки днів роботи цього вистачить.

// const askAmountOfWater = parseInt(prompt("Enter the amount of water"));
// if (askAmountOfWater < 10){
//     throw new Error ('The crash');
// }
//  const days = Math.floor(askAmountOfWater * 0.1);
//  alert(`You can use the water for ${days}days`);
//  console.log (`You can use the water for ${days}days`);

// const name = {
//     name: 'Alina',
//     lastName: 'Voitovych'
// }
// console.log(name.lastName);
// name['Olga'] = true;
// console.log(name['Olga']);

// const firstNum = 5;
// const secondtNum = 4;
// console.log(firstNum + secondtNum);

// function operations(firstNum, secondtNum, operator) {
//     if (operator === '+') {
//         return firstNum + secondtNum;
//     }
//     if (operator === '-') {
//         return firstNum - secondtNum;
//     }
// }
// console.log(operations(10, 12, '+'))
// console.log(operations(20, 10, '-'))

// const askUser = prompt('Enter your role');
// function provideAccess(role) {
//     if (role === 'admin') {
//         return 'Welcome, my master';
//     }
//     if (role === 'worker') {
//         return 'Hello,slave';
//     }
//     if (role === 'boss') {
//         return 'All hail the sovereign';
//     }
// }

// console.log(provideAccess(askUser));

// const goods = prompt('Enter the goods');
// const amount = +prompt('Enter amount');

// function defineGoods(goods, amount) {
//     if (goods === 'apples' && amount === 10) {
//         return 'This is an apple';
//     }
//     if (goods === 'milk' && amount === 3) {
//         return 'This is milk';
//     }
//     else {
//         return 'Check your parameters';
//     }
// }

// console.log(defineGood(goods, amount));


// const greeting = () => {
//     console.log('Hello world')
// }

// greeting()

// const number = num => num * 3;
// console.log(number(3))

// function logArguments() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log('Hello ' + arguments[i]);
//     }

// }
// logArguments('Jon', 'Max', 'Alex')

// const num = 5;
// function logNumber (){
//     const num = 4;
//     console.log(num);
// }
// logNumber()


/*1.Створи функцію sayError(), яка виводитиме (за до-
помогою діалогового вікна alert) повідомлення з тек-
стом «Some error occurred!».*/
/*
function sayError(){
alert('Some error occurred!');
}
sayError();
*/

/*2.Створи функцію showError(x), яка виводитиме (за
допомогою діалогового вікна alert) повідомлення з
текстом «Error X occurred!», де Х — текст із аргумен-
ту функції.*/

/*function showError(x){
    alert('Error x occurred')
}
showError();*/

/*3. Створи функцію numbers(), яка підраховуватиме
кількість переданих числових аргументів. Наприклад,
numbers(1, 2, "a") поверне значення 2, numbers(true, 2,
false) -1, numbers() — 0*/


// Просто в циклі перебираємо властивості об’єкта і 
// повертаємо false, як тільки зустрічаємо властивість.

// function isEmpty(obj) {
//     for (let key in obj) {
//       // якщо цикл розпочався, властивість є
//       return false;
//     }
//     return true;
//   }

// Напишіть код для підсумовування всіх зарплат і збережіть
// у змінній sum.У наведеному вище прикладі має бути 390.а
// Якщо об’єкт salaries порожній, то результат має бути 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum); // 390
// or

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     };

//     const sumSalaries = (obj) => {
//     let salary = 0;
//     for(let key in obj){
//     salary = obj[key] + salary;
//     } return salary;
//     }
//     console.log(sumSalaries(salaries));




// 1.
/*1*/
// const carObject = {
//     manufacturer: 'Germany',
//     model: 'Mercedes',
//     yearOfManufacture: 2022,
//     averageSpeed: 100,
//     tank: 80,
//     expense_100Km: 10,
//     driver: 'Alex'
// }
// console.log(Object.entries(carObject));
// /*2.*/
// carObject.driver = 'Alex';
// console.log(carObject['driver']);
// /*3.*/
// console.log('driver' in carObject);
// /*4*/
// // дистанція
// const distance = 200;
// console.log(distance);
// //  час поїздки 
// function travelTime(distance, carObject) {
//     const totalTime = Number(distance / carObject.averageSpeed);
//     console.log(totalTime)
// }
// travelTime(distance, carObject)



// // 2.
// const timeObject = {
//    hours:5,
//    minutes:5,
//    seconds:5 
// }
// console.log(Object.entries(timeObject));

// function timeWithChangedSeconds() {
//     let time = (timeObject + (changedSeconds * 1000))

// }


// const data = new Date('01 Apr 2023 15:00 (monday)');
// console.log(data.getDay());
// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(data.getFullYear());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log('(monday)');

// const date = new Date(2023, 5, 1, 15, 00, '(monday)');
// alert( date );

// const date = new Date(Date.UTC(2023, 03, 01, 12, 00));
// console.log(new Intl.DateTimeFormat('en-GB',
// {dateStyle: 'full', timeStyle: 'long'}).format(date));
 
// const userInfo = [name, age]

// function arr(array){
//     array.forEach 
// }

// const numbers = [1 , 2 , 3]
// arr.forEach(function(item, index, array) {
//     // ... робимо щось з item
//   });

const one = [2,4,6,8,10]
const two = [1,3,5,6,8,9]

