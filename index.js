
//встроенный обьект contact//объединил два массива//

const array1=[1,2,3];
const array2=[4,5,6];

const array3=array1.concat(array2);
console.log(array3);

//встроенный обьект reverse//изменил порядок массива/

const number = [1,2,3];
number.reverse();

console.log(number);

//встроенный обьект push//добавил елменты в налало массива

const and =[1,2,3];
const next = and.push[4,5,6];

console.log(and);

//встроенный обьект unshift//добвавил элементы в нонец массива

const num=[1,2,3];
num.unshift(4,5,6);

console.log(num);

//встроенный элемент shift//встроенный элемент pop//
//удалил первый элемент и вывел его// удалил последний елемент и вывел его//
const ele = ['js','css','html'];
console.log(ele);
const shifted = ele.shift();
const poped = ele.pop();
console.log(shifted);
console.log(poped);


// метод slice возвращает новый массив с часть исходного//
const NumArray = [1,2,3,4,5];
const newNumArray = NumArray.slice(0,-2);
console.log (newNumArray);
const newNumArray2 = NumArray.slice(3);
console.log (newNumArray2) ;

//метод splice ///
const removed = NumArray.splice(1,2);
console.log (NumArray);
const NumArray2 = [1,2,3,4,5];
const rem = NumArray2.splice(1,3);
console.log(rem);
const NumArray3 = [1,2,3,4,5];
let removed2=NumArray3.splice(3,0,'a','b','c');
console.log(NumArray3);
const NumArray4 = [1,2,3,4,5];
let removed3=NumArray4.splice(1,0,'a','b');
console.log(NumArray4);

////  метод sort ///

const ArrayNumb=[3,4,1,2,7];
function compareNumbers(a,b){
  return a-b;
};
console.log(ArrayNumb.sort(compareNumbers));
//////////////////////////1
"use strict";
 const homWork=function hasElem([]) {
    HomWork === String || HomWork ==='' ? true : false;
 }
 
// // if( String || ''){
// //  return true;
// // }
// }

console.log(homWork);
///////////////////////////////////2
const homWork2=[1,5,9,8,4,6,1,2];
function NumberSeach() {
  homWork2 === 2 ? true : false;
}
console.log(NumberSeach);