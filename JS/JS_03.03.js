<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JavaScript</title>
        <style>
        </style>
    </head>
    <body>
      <ul id = "car">
        <li><span>Список машин</span></li>
        <ul>
            <li><span>Audi</span></li>
            <ul>
                <li>Объём: 1.8</li>
                <li>Привод: передний</li>
                <li>Цвет: белый</li>
            </ul>
        </ul>
        <ul>
            <li><span>BMW</span></li>
            <ul>
                <li>Объём: 2.5</li>
                <li>Привод: задний</li>
                <li>Цвет: черный</li>
            </ul>
        </ul>
        <ul>
            <li><span>ВАЗ</span></li>
            <ul>
                <li>Объём: 1.6</li>
                <li>Привод: передний</li>
                <li>Цвет: синий</li>
            </ul>
        </ul>
      </ul>
        <script>
           car.onclick = function (event){
               if (event.target.tagName != 'SPAN') return;
               let childrenContainer = event.target.parentNode.querySelector('ul');
               if (!childrenContainer) return; 
               childrenContainer.hidden = !childrenContainer.hidden;
           }
       </script>
    </body>
</html>

/</html>
////////////////////////////


/*Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
Каждый элемент <th> имеет атрибут data-type:</th></th>*/
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JavaScript</title>
        <style>
            table, td, th{
                border: 1px solid black;
                border-spacing: 0;
            }
        </style>
    </head>
    <body>
        <table id="grid">
            <thead>
              <tr>
                <th data-type="number">Возраст</th>
                <th data-type="string">Имя</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15</td>
                <td>Вася</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Петя</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Гена</td>
              </tr>
            </tbody>
          </table>          
        <script>
            grid.onclick = function(elem) {
                if (elem.target.tagName != 'TH') return;
                let th = elem.target;
                sortGrid(th.cellIndex, th.dataset.type);
              };
              function sortGrid(colNum, type) {
                let tbody = grid.querySelector('tbody');
                let rowsArray = Array.from(tbody.rows);
                let compare;
                switch (type) {
                  case 'number':
                    compare = function(rowA, rowB) {
                      return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
                    };
                    break;
                  case 'string':
                    compare = function(rowA, rowB) {
                      return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
                    };
                    break;
                }
                rowsArray.sort(compare);
                tbody.append(...rowsArray);
            }
       </script>
    </body>
</html>
/ </html>

/*
PreventDefault
*/
<script>
        function handler(event) {   
          alert('...');
          event.preventDefault();
        }
        
      </script>
       <a href="http://w3.org" onclick="handler(event)"></a>