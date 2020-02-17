/*Задача 1

В коде ниже класс Rabbit наследует Animal.
К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.*/

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  class Rabbit extends Animal {
    constructor(name) {
      super(name)
      this.created = Date.now();
    }
  }
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);

  
  /*Задача 2

У нас есть класс Clock. Сейчас он выводит время каждую секунду
Создайте новый класс ExtendedClock, который будет наследоваться от Clock и 
добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его*/

class Clock {
    constructor({ template }) {
      this.template = template;
    }
    render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  class ExtendedClock extends Clock {
    constructor (precision){
      super();
      this.precision = precision;
    }
  }
  
  /*Задача  3

Написать класс Cat, который наследуется от класcа Animal. 
Класс Animal имеет метод getName (name можно передать в конструктор). 
Класс Cat имеет метод meow (возвращает строку “Cat {catname} is sayig meow”.
Пример использования:
var cat = new Cat(‘garfield’);
cat.getName() === ‘garfield’; // true
cat.meow() === ‘Cat garfield is saying meow’; // true*/

class Animal {
  constructor (name) {
    this.name = name;
  }
  getName(){
    return this.name;
  }
}

class Cat extends Animal {
  meow(){
    return "Cat " + this.getName() + " is saying meow";
  }
}
let cat = new Cat ("garfield");
console.log (cat.getName() === 'garfield');
console.log (cat.meow() === 'Cat garfield is saying meow');

/*Задача 4

Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.

Например:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

class Calculator {
  read (number, number2) {
    this.number = prompt("Введите первое число", 0);
    this.number2 = prompt("Введение второе число", 0);
  }
  sum () {
    return +(this.number) + +(this.number2);
  }
  mul () {
    return this.number2 * this.number;
  }
}
let calculator = new Calculator()
calculator.read();
console.log (calculator.sum());
console.log (calculator.mul());


/*Context 3*/

function Car() {
	this.b = "Hello, arrow function";
	this.func = () => (console.log(this.b))
}

function Truck() {
	this.b = "Real big truck";
	this.func = () => (console.log(this.b))
}

let car = new Car();
let truck = new Truck();

var magicCar = {
	b: "Wow, realy? OMG"
}

let magicTruck = {
	b: “It’s just Volvo, man!”;
}

magicCar.func = car.func;
magicTruck.func  = truck.func;

magicCar.func(); // Hello, arrow function
magicTruck.func(); // Real big truck

/*Context 4*/

var globus = 'i\'m cube';

function logger() {
  console.log(this.globus);
}

let testWorld = {
  globus: 'this is test world'
};

testWorld.logger = logger;
testWorld.logger(); // this is test world
logger.call(this) // i\m cube



//Примеры 

console.log ((55).toString()) // "55"

console.log ("ABCD".toLowerCase()) // abcd

console.log ("abcd".toUpperCase()) // ABCD

console.log ("ab cd".indexOf("cd", 3)) // 3

console.log ("abcd".length) // 4

console.log ("abcd".includes("c",1)) // true

console.log ("abcd".slice(0,2)) // ab

console.log (Math.floor(7.6)) // 7

console.log (Math.ceil(7.1)) // 8

console.log (Math.round(7.5)) // 8

console.log (Math.round(7.1)) // 7

console.log ((7).toFixed(5)) // 7.00000

console.log (parseInt("77abc6")) // 77

console.log (parseFloat("77.5abc6")) // 77.5

console.log (Math.pow(6, 2)) // 36

let arr = [1, 2, 3, 4];
console.log (arr.pop()) // 4

let arr = [1, 2, 3, 4];
arr.push(5);
console.log (arr) // 1,2,3,4,5

let arr = [1, 2, 3, 4];
arr.shift()
console.log (arr) // 2, 3, 4

let arr = [1, 2, 3, 4];
arr.unshift(0)
console.log (arr) //0, 1, 2, 3, 4

let arr = [1, 2, 3, 4];
for (let num of arr){
  num += 1;
  console.log(num); // 2, 3, 4, 5
}

let arr = [1, 2, 3, 4];
for (let num in arr){
  console.log(num); // 0, 1, 2, 3
}

let arr = [1, 2, 3, 4];
arr.forEach((index) => {
  console.log (index += 1); // 2, 3, 4, 5
});

let arr = [1, 2, 3, 4];
console.log (arr.splice (2, 2, 56)); // 3, 4
console.log (arr) // 1, 2, 56

let arr = [1, 2, 3, 4];
console.log (arr.slice (2)); // 3, 4
console.log (arr) // 1, 2, 3, 4

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log (arr.concat(arr2)); // 1, 2, 3, 4, 5, 6, 7, 8

let arr = [-1, 2, -3, 4];
arr.find((element) => {
    if (element < 0){
    console.log (element); // -1, -3
    }
});

let arr = [-1, 2, -3, 4, 6, 5];
arr.findIndex((element, index) => {
    if (index % 2 == 0){
    console.log (index); // 0, 2, 4
    }
});

let arr = [-1, 2, -3, 4, 6, 5];
let arr2 = arr.filter((element) => {
    if (element % 2 == 0){
    return true; // -1, -3
    }
});
console.log (arr2) // 2, 4, 6

let arr = [-1, 2, -3, 4, 6, 5];
let arr2 = arr.map ((element) => {
  let square = Math.pow (element, 2);
  return square;
});
console.log (arr2)

let str = "abcd";
console.log (str.split("", 3))

let str = [1, 2, 3, 4];
console.log (str.join())

