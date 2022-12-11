//

// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result = '';
for (let i = 20, max = 30; i <= max; i += 0.5) {
  result += i + ' ';
}
console.log(result);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (let i = 10, max = 100; i <= max; i += 10) {
  console.log(`${i}$ is ` + i * 27 + ` UAH`);
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const n = 50;
for (let i = 1, max = 100; i <= max && i * i <= n; i++) {
  alert(i * i);
  console.log(i * i);
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let isPrime;
do {
  isPrime = +prompt(`Enter the number`);
} while (Number.isInteger(isPrime) == false)

for (let i = 2; i <= isPrime; i++) {
  if (isPrime % i == 0 && isPrime == i && isPrime > 1) {
    console.log(`${isPrime} is a prime number`);
    break;
  } else {
    console.log(`${isPrime} is NOT a prime number`);
    break;
  }
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let isFromThree;
let exponent = 0;

do {
  isFromThree = +prompt(`Enter the number`);
} while (Number.isInteger(isFromThree) == false)

let temp = isFromThree;

do {
  temp /= 3;
  exponent++;
} while (temp > 1);

if (temp == 1) {
  console.log(`3**${exponent} = ${isFromThree}`)
} else {
  console.log(`${isFromThree} is not exponent of 3`)
}

