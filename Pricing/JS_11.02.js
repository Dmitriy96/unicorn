/*Написать класс Cat, который наследуется от класcа Animal. 
Класс Animal имеет метод getName (name можно передать в конструктор). 
Класс Cat имеет метод meow (возвращает строку “Cat {catname} is sayig meow”.
Пример использования:
var cat = new Cat(‘garfield’);
cat.getName() === ‘garfield’; // true
cat.meow() === ‘Cat garfield is saying meow’; // true*/



function animal (name){
    this.name = name;
  }
    animal.prototype.getName = function() {
          return this.name;  
      };
    function Cat (name){
      animal.apply(this, arguments);
    }
    Cat.prototype = Object.create(animal.prototype);
    Cat.prototype.meow = function() {
          return 'Cat ' + this.getName() +' is saying meow';
      };
  
  let cat = new Cat('garfield');
       
  console.log(cat.getName() === 'garfield'); 
  console.log(cat.meow() === 'Cat garfield is saying meow'); 



  /*Реализуйте класс Student (Студент), который будет наследовать от класса User. 
  Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
  surname (фамилия, наследуется от User), year (год поступления в вуз). 
  Класс должен иметь метод getFullName() (наследуется от User), 
  с помощью которого можно вывести одновременно имя и фамилию студента. 
  Также класс должен иметь метод getCourse(), 
  который будет выводить текущий курс студента (от 1 до 5). 
  Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
  Текущий год получите самостоятельно. 
  -Реализовать также приватное поле gender с возможностью менять его (геттер и сеттер). 
  -Реализовать метод healCorn2019(), чтоб при вызове у любого объекта User или Student в 
  консоли писало сообщение “Короновирус никогда не победит JS”(prototype).
Реализовать через привязку контекста и прототип*/

function User (name, surname) {
  this.name = name;
  this.surname = surname; 
}
User.prototype.getFullName = function () {
  return 'Имя: ' + this.name + ' Фамилия: ' + this.surname;
};
User.prototype.getGender = function () {
  return ' Пол: ' + this.gender;
}
User.prototype.healCorn2019 = function (){
  return console.log('Коронавирус никогда не победит JS');
}
function Student (name, surname, year) {
  this.year = year;
  User.apply (this, arguments)
}
Student.prototype = Object.create (User.prototype);
Student.prototype.getCourse = function () {
  return 2020 - this.year;
};
Student.prototype.getTest = function () {
  return this.getFullName() + ' Курс: ' + this.getCourse() + this.healCorn2019();
}

let student = new Student ("Dmitriy", "Bakun", 2020);
console.log (student.getTest());