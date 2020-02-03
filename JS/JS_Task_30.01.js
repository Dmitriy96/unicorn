function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter2() ); // ? - 0
  alert( counter2() ); // ? - 1

/* Задача 2
Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, 
а третьим параметром функцию, которая возводит в куб. 
Эти функции есть как Function Declaration - kvadrat, kub. 
Пусть функция ggg вернет сумму квадрата и куба числа.*/
function kvadrat (num) {
    num = num ** 2;
    return num;
}
function kub (num1) {
    num1 = num1 ** 3;
    return num1;
}
function ggg (number, callback) {
    number = kvadrat(2) + kub(3);
    return number;
}

alert (ggg());

/* Задача 3
Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. 
Функция each должна вернуть измененный массив.*/
function oper(arr){
    let sum;
    sum = arr.sort(function(a, b) { return a - b; });
    return sum;
   }
   
   function each (some_arr = [10, 3, 7, 5], callback){
     oper (some_arr);
     return some_arr;
   }
   console.log (each());

   /* Задача 4
   Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, 
   которые по очереди применятся к каждому элементу массива: к первому элементу массива - первая функция, 
   ко второму - вторая и так далее пока функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу*/
function kvadrat (num) {
    num = num ** 2;
    return num;
}
function kub (num1) {
    num1 = num1 ** 3;
    return num1;
}
let func = [kvadrat, kub];
let arr = [2,3];

function ggg (arr, func){
  let j = 0; 
	for (let i = 0; i < arr.length; i++) {
		if (i >= func.length) {
			j = i % func.length;
			   
		}
		arr[i] = func[j](arr[i]);
		j++;
	}
	return arr;
}
console.log (ggg(arr, func));

/* Задача 5
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, 
пока не будут перебраны все числа из этого промежутка. 
Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.*/

function funcRand(){
  let arr = [];
  let rand;
  function randomNumber (min = 1, max = 100){
    return Math.floor (Math.random() * (max - min )) + min;;
  }
    while (arr.length < 100){
      rand = randomNumber();
      if (arr.length == 0) {
            arr.push(rand);
          }
  }
    let flag = true;
    for (let i = 0; i < arr.length; i++){
      if (arr [i] == rand){
        flag = false;
        break;
      } 
  }
    if (flag){
      arr.push (rand);
    }
    return (arr);
    }
  console.log (funcRand().sort(function(a,b){return a-b;}));
  

  /*Задача 6

  Сделайте функцию, которая считает и выводит количество своих вызовов.
	func(); //выведет 1
  func(); //выведет 2
  func(); //выведет 3
  func(); //выведет 4*/

  function count () {
    var counter  = 0;
    return function (){
      counter++;
      return counter;
    }
  }
  let func = count();
  console.log(func());
  console.log(func());
  console.log(func());
  
