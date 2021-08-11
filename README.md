### React Quiz App
<p>Es un juego de preguntas con opciones,que muestra el resultado luego de las tres preguntas.</p>
Tres componentes iniciales
<ul>
  <li>Menu</li> 
  <li>Quiz</li>
  <li>Endscreen</li>
</ul>
  

-------
![](img/Screenshot_6.jpg)

  Use el hook useState para darle un estado a cada componente inicial.A travez de un condicional ,el estado de la variable gameState  determina que componente se renderiza.
  <p>Luego con el hook useContext cree un estado global y lo emplee en todos los componentes iniciales y le di los valores de gameState y la funcion que la modifica setGameState.Asi pude utilizar estos valores en los diferentes componentes.En el menu ,coloque un boton con el evento onClick y dentro de este la funcion setGameState que cambia el estado cuando se clickea y lo cambia a quiz.
  
----------
![](img/quiz.gif.gif)
-----------
![](img/reactnode.png)



