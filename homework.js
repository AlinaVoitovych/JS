'use srtict'
    
    // Створіть об’єкт, що описує автомобіль(виробник, модель, рік
    // випуску, середня швидкість), і наступні функції для роботи з цим
    // об’єктом.
    // 1. Функція для виведення інформації про автомобіль на
    // екран.
    // 2. Функція для підрахунку необхідного часу для подолання
    // переданої відстані із середньою швидкістю.Враховуйте,
    // що через кожні 4 години дороги, водієві необхідно робити
    // перерву на 1 годину.

const carObject = {
    manyfacture: 'Germany',
    model: 'Mercedes',
    yearOfManyfacture: 2022,
    averageSpeed: 100
}
function carInfo() {
    console.log(Object.entries(carObject));
}
carInfo();
// console.log(Object.entries(carObject));

// const distance = 200;
let distance = prompt('Enter the distance');
console.log(distance);

function travelTime() {
    const totalTime = Number(distance / carObject.averageSpeed);
    const fullTime = Number((totalTime / 4) + totalTime);
    console.log(fullTime);
    // for (let distance < = 400) {
    //     alert(totalTime);
    // }
}
travelTime();

