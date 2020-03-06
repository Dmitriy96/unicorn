/*Задача

Дана страница:
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Как получить элементы :
1. Напишите код, который получит элемент <div>?
2. Напишите код, который получит <ul>?
3. Напишите код, который получит второй <li> (с именем Пит)?*/
1.document.body.children[0]; / document.body.firstElementChild / document.childNodes[1]
2.document.body.children[1]; / document.body.lastElementChild
3.document.body.lastElementChild.lastElementChild

/*Задача

Если elem – произвольный узел DOM-элемента…
Правда, что elem.lastChild.nextSibling всегда равен null? да
Правда, что elem.children[0].previousSibling всегда равен null ? нет
*/

<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8">
        <title>JavaScript</title>
        <style>
            table, td {
                border: 1px solid black;
                border-spacing: 0;
            }
        </style>
    </head>
    <body>
        <table id = "table">
            <tr>
                <td>1:1</td>
                <td>2:1</td>
                <td>3:1</td>
                <td>4:1</td>
                <td>5:1</td>
            </tr>
            <tr>
                <td>1:2</td>
                <td>2:2</td>
                <td>3:2</td>
                <td>4:2</td>
                <td>5:2</td>
            </tr>
            <tr>
                <td>1:3</td>
                <td>2:3</td>
                <td>3:3</td>
                <td>4:3</td>
                <td>5:3</td>
            </tr>
            <tr>
                <td>1:4</td>
                <td>2:4</td>
                <td>3:4</td>
                <td>4:4</td>
                <td>5:4</td>
            </tr>
            <tr>
                <td>1:5</td>
                <td>2:5</td>
                <td>3:5</td>
                <td>4:5</td>
                <td>5:5</td>
            </tr>
        </table>
        <script>
           for (let i = 0; i < table.rows.length; i++){
             let diagonal = table.rows[i].cells[i];
             diagonal.style.background = 'red';
           } 
           
       </script>
    </body>
</html>

/*Задача
Добавьте JavaScript к кнопке button, 
чтобы при нажатии элемент <div id="text"> исчезал.
*/
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JavaScript</title>
        <style>
        </style>
    </head>
    <body>
      <button id = 'btn'>Удалить div</button>
      <div id = "text">Текст</div>
        <script>
           btn.onclick = function (){
             text.style.display = 'none';  
           }
       </script>
    </body>
</html> 

Задача
Создайте кнопку, которая будет скрывать себя по нажатию.

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JavaScript</title>
        <style>
        </style>
    </head>
    <body>
      <button id = 'btn'>Скрыть</button>
        <script>
           btn.onclick = function (){
             btn.style.display = 'none';  
           }
       </script>
    </body>
</html>

Задача
В переменной button находится кнопка. Изначально на ней нет обработчиков.
Который из обработчиков запустится? 

Что будет выведено при клике после выполнения кода? -> 1,2
button.addEventListener("click", () => alert("1")); - выполниться
button.removeEventListener("click", () => alert("1")); - не выполниться
button.onclick = () => alert(2); - выполниться



