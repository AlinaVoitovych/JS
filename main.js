/*1. Напиши скрипт, який перевіряє змінну «х» на на-
лежність діапазону 0..100 (наприклад, 10 — належить,
-10 — не належить, 0 — належить, 200 — не належить).*/


const x = +prompt('Enter a number');
if (x >= 0 && x <= 100){
    alert('Ok!');
    console.log('Ok');
}
else {
    alert('No!');
    console.log('No!');
}


/*2. Напиши скрипт, який порівнює змінні «х» та «у»
і виводить одне з повідомлень: «x > y», «x < y» або
«x=y» залежно від значень змінних.*/

const x = +prompt('Enter first name');
const y = +prompt('Enter second name'); 

if (x > y){
    alert('x > y');
}
else if (x < y){
    alert('x < y');
}
else if (x = y){
    alert('x = y');
}


/*3. Напиши скрипт, який «ранжує» змінну «х»: виво-
дить її належність діапазонам 0..100, 101..200, 201..300
або невідповідність жодному з них (наприклад, 30
належить діапазону 0..100; 250 — діапазону 201..300;
-10 або 500 — жодному).*/

const x = +prompt('Enter a number');
if (x >= 0 && x <= 100){
    alert('Your number is in the range from 0 to 100');
}
else if (x >= 101 && x <= 200){
    alert('Your number is in the range from 101 to 200');
}
else if (x >= 201 && x <= 300){
    alert('Your number is in the range from 201 to 300');
}
else {
    alert('Your number does not belong to any of the ranges'); 
}

/*4. Напиши скрипт, який аналізує змінну «х» та виво-
дить назву цифри: 0-«нуль», 1-«одиниця», 2-«двійка»
тощо. Якщо змінна не є цифрою, виводиться пові-
домлення «не цифра».*/

const x = +prompt('Enter a number from 0 to 10');

if (x === 0){
    alert('zero');
    console.log('zero')
}
else if (x === 1){
    alert('one');
    console.log('one')
}
else if (x === 2){
    alert('two');
    console.log('two')
}
else if (x === 3){
    alert('three');
    console.log('three')
}
else if (x === 4){
    alert('four');
    console.log('four')
}
else if (x === 5){
    alert('five');
    console.log('five')
}
else if (x === 6){
    alert('six');
    console.log('six')
}
else if (x === 7){
    alert('seven');
    console.log('seven')
}
else if (x === 8){
    alert('eight');
    console.log('eight')
}
else if (x === 9){
    alert('nine');
    console.log('nine')
}
else if (x === 10){
    alert('ten');
    console.log('ten')
}
else {
    alert('Not a number!')
    console.log('Not a number!')
}

// Цикли

/*1. Напиши скрипт, який запитує у користувача число
N і виводить усі парні числа від 2 до N.*/

const userNumber = prompt('Enter a number');
for (let i = 2; i <= userNumber; i++){
    if (i % 2 === 0){
        alert(i);
    }
}

/*2. Напиши скрипт, який запитує у користувача число
N і виводить усі непарні числа від N (або N-1, якщо
N парне) до 1 у порядку спаду.*/

const userNumber = prompt('Enter a numbr');
for (let i = userNumber; i <= userNumber && i > 0; i--){
    if (i % 2 === 0)continue;
        alert(i);
    }
    

/*3. Напиши скрипт, який запитує у користувача число
N і виводить усі числа, на які ділиться N, включаючи
195 
число 1 (приклади: введення N=10, висновок 1, 2, 5;
введення 11, виведення 1).*/
const userNumber = ('Enter a number');

// 4. Через витік із бака охолодження щодня витікає 10%
// налитої води. При об’ємі води менше, ніж 10 літрів
// виникає аварійна ситуація. Створи програму, яка
// запитує у користувача початковий обсяг води і роз-
// раховує, на скільки днів роботи цього вистачить.

const askAmountOfWater = parseInt(prompt("Enter the amount of water"));
if (askAmountOfWater < 10){
    throw new Error ('The crash');
}
 const days = Math.floor(askAmountOfWater * 0.1);
 alert(`You can use the water for ${days}days`);
 console.log (`You can use the water for ${days}days`);



