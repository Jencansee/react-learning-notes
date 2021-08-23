# Fast learning/revisiting React

## SMART/STATEFULL VS STATELESS/DUMB/PRESENTATIONAL COMPONENT
ExpenseItem or UI Card is a presentational/dumb/stateless component, it's purpose to represent data without changing state.
Whereas, Expenses component manages state.

## 
For example, we have a button that utilize function to change some text:
`<button onClick={ () => clickHandler() }>button</button>`

onClick={ clickHandler() } - функция сработает когда будет рендер jsx, при анон. функции не срабатывает на рендере
onClick={ clickHandler } -- только при клике сработает


## How can you communicate from one of your components to a parent (i.e. higher level) component?

You can accept a function via props and call it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function).


## How does state works?
React Hooks должны быть использованны внутри главных функций, т.е не использовать вне главной функции и не использовать внутри других функций.
[useState хук](https://reactjs.org/docs/hooks-state.html)

Объявляем используя деструктуризацию | Это называется слайсом
`const [count, setCount] = useState(2);`

И засунем в JSX кнопку по которой будем жмакать
`<div onClick={() => setCount(count + 1 )}>You've clicked me {count} times</div>`

`count` - первое значение, при передаче в аргумента в useState(), это значение будет использоваться как первое. В нашем случае счет пойдет с двух, а не с нуля.
`setCount` - функция которой можно менять state, название желательно использовать 
приставка set + название первого значение


## Styles
1. Импортировать CSS файлы, скопятся на весь проект, т.е работают как обычно.<br>
  `import './Button.css'`

2. Импортировать CSS/SCSS modules - не скопятся <br>
  `import classes from './Button.module.css'`

3. Использовать [styled-components](https://styled-components.com/docs/basics)


## Controlled & Uncontrolled components
<b>Controlled</b> is using ``useState()``, therefore `React` is controlling the state and component, whereas <br>
<b>Uncotrolled</b>  is using `ref`, i.e it's relying on browser default behavior, and we don't feed anything back to inputs (At least we shouldn't have); <b>It's a rule<b>
  