//встроенный обьект contact//объединил два массива//

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);
console.log(array3);

//встроенный обьект reverse//изменил порядок массива/

const number = [1, 2, 3];
number.reverse();

console.log(number);

//встроенный обьект push//добавил елменты в налало массива

const and = [1, 2, 3];
const next = and.push[(4, 5, 6)];

console.log(and);

//встроенный обьект unshift//добвавил элементы в нонец массива

const num = [1, 2, 3];
num.unshift(4, 5, 6);

console.log(num);

//встроенный элемент shift//встроенный элемент pop//
//удалил первый элемент и вывел его// удалил последний елемент и вывел его//
const ele = ["js", "css", "html"];
console.log(ele);
const shifted = ele.shift();
const poped = ele.pop();
console.log(shifted);
console.log(poped);

// метод slice возвращает новый массив с часть исходного//
const NumArray = [1, 2, 3, 4, 5];
const newNumArray = NumArray.slice(0, -2);
console.log(newNumArray);
const newNumArray2 = NumArray.slice(3);
console.log(newNumArray2);

//метод splice ///
const removed = NumArray.splice(1, 2);
console.log(NumArray);
const NumArray2 = [1, 2, 3, 4, 5];
const rem = NumArray2.splice(1, 3);
console.log(rem);
const NumArray3 = [1, 2, 3, 4, 5];
let removed2 = NumArray3.splice(3, 0, "a", "b", "c");
console.log(NumArray3);
const NumArray4 = [1, 2, 3, 4, 5];
let removed3 = NumArray4.splice(1, 0, "a", "b");
console.log(NumArray4);

////  метод sort ///

const ArrayNumb = [3, 4, 1, 2, 7];
function compareNumbers(a, b) {
  return a - b;
}
console.log(ArrayNumb.sort(compareNumbers));
/////1.Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет.//////
"use strict";
function hasElem(value) {
  return typeof value === "";
}
const StArr1 = [1, 2, 3];
console.log(StArr1.every(hasElem));

////2.Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.////

const homWork2 = [1, 5, 9, 8, 4, 6, 1, 2];
const result2 = homWork2.includes(2);
console.log(result2);
///3.Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1].//////

const DublNumb = [1, 2, 3, 3, 4, 8, 9, 5, 6, 7];
const SeachNumb = (Element) => Element===Element++;
console.log (DublNumb.some(SeachNumb));
//4.Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random().////
const random_arr = function (length, min, max) {
  const resultRan = [];
  for (let i = 0; i < length; i++) {
    resultRan.push(RandomNumb(min, max));
  }
  return resultRan;
};
function RandomNumb(min, max) {
  let rand = Math.random() * (max - min) + min;
  rand = Math.round(rand);
  return rand;
}
console.log(random_arr(10, 5, 33));
//////5.Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79./////
const ArrNumb = [12, 15, 20, 25, 59, 79];
let average = ArrNumb.reduce((r, i) => r + i, 0) / (ArrNumb.length || 1);

console.log(average);
