// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result = '';
for (let i = 10, max = 20; i <= max; i++) {
  result += i
  if (i != max) {
    result += ', ';
  }
}
console.log(result);

// or
let result2 = [];
for (let i = 10, max = 20; i <= max; i++) {
  result2.push(i);
}
console.log(result2);

// 2. Вивести квадрати чисел від 10 до 20.
for (let i = 10, max = 20; i <= max; i++) {
  console.log(`square of ${i} is `+ i*i);
}

// 3. Вивести таблицю множення на 7.
const num = 7;
for (let i = 1, max = 10; i <= max; i++) {
  console.log(`${num} * ${i} = ` + num * i);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1, max = 15; i <= max; i++) {
  sum += i;
}
console.log(sum);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;
for (let i = 15, max = 35; i <= max; i++) {
  mult *= i;
}
console.log(mult);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let average = 0;
const max = 500;
for (let i = 1; i <= max; i++) {
  average += i;
}
console.log(average / max);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let averageOfEvenNum = 0;
for (let i = 30, max = 80; i <= max; i++) {
  if (i % 2 == 0) {
    averageOfEvenNum += i;
  }
}
console.log(averageOfEvenNum);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100, max = 200; i <= max; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
const num2 = 100;
for (let i = 1; i <= num2; i++) {
  if (num2 % i == 0) {
    console.log(i);
  }
}

// 10. Визначити кількість його парних дільників.
const num3 = 100;
let count = 0;
for (let i = 1; i <= num3; i++) {
  if (num3 % i == 0 && i % 2 == 0) {
    count++;
  }
}
console.log(count);


// 11. Знайти суму його парних дільників.
const num4 = 100;
let result11 = 0;
for (let i = 1; i <= num4; i++) {
  if (num4 % i == 0 && i % 2 == 0) {
    result11 += i;
  }
}
console.log(result11);

// 12. Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = `+ i * j)
  }  
}