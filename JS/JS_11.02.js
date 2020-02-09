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