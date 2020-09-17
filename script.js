// 1.  Знайдіть суму всіх цифр від 1 до 100.
// let sumary = 0;
// for(let i = 0; i < 100; i++) {
//     sumary +=i;
// }
// console.log(sumary);

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
// let arr2 = [-1, 22, 3, 44, 5];
// let maxValue = arr2[0];
// for(let i = 0; i < arr2.length; i++) {
//     if(maxValue < arr2[i]) maxValue = arr2[i];
// }
// console.log(maxValue);

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера.
// let countNumbers = 8;
// let countPositiveNumbers = 0;
// let countNegativNumbers = 0;
// let countNull = 0;

// for(let i = 0; i < countNumbers; i++) {
//     let userNumber = prompt(`Введіть 8 чисел:`);
//     console.log(userNumber);
//     if(userNumber > 0) {
//         countPositiveNumbers += 1;
//     }
//     else if(userNumber < 0) {
//         countNegativNumbers += 1;
//     }
//     else {
//         countNull +=1;
//     }
// }

// alert(`Вами було введено ${countPositiveNumbers} додатніх чисел, ${countNegativNumbers} від'ємних чисел, ${countNull} нулів.`);

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
// Я вирішив вивести табличку для чисел 0-9 бо так цікавіше)
// for(let i = 0; i < 10; i++) {
//     console.log(`======= Table for ${i} ========`);
//     for(let j = 0; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// let arr3 = [2, 5, 9, 15, 0, 4];
// for(let i = 0; i < arr3.length; i++) {
//     if(arr3[i] > 3 && arr3[i] < 10) {
//         console.log(arr3[i]);
//     }
// }

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?
// let start;
// do {
//     let result;
//     let firstNumber = +prompt(`Введіть перше число`, 20);
//     let operation = prompt(`Виберіть дію: + - * /`, '+');
//     let secondNumber = +prompt(`Введіть друге число`, 5);


//     switch(operation) {
//         case '+':
//             result = firstNumber + secondNumber;
//             alert(`${firstNumber} + ${secondNumber} = ${result}`);
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             alert(`${firstNumber} - ${secondNumber} = ${result}`);
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             alert(`${firstNumber} * ${secondNumber} = ${result}`);
//             break;
//         case '/':
//             result = firstNumber / secondNumber;
//             alert(`${firstNumber} / ${secondNumber} = ${result}`);
//             break;
//     }


//     start = confirm(`Запустити калькулятор ще раз?`);
// } while(start === true)