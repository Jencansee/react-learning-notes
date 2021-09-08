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

2. Import CSS/SCSS modules - doesn't scope <br>
  `import classes from './Button.module.css'`

3. Use [styled-components](https://styled-components.com/docs/basics)


## Controlled & Uncontrolled components
<b>Controlled</b> is using ``useState()``, therefore `React` is controlling the state and component, whereas <br>
<b>Uncotrolled</b>  is using `ref`, i.e it's relying on browser default behavior, and we don't feed anything back to inputs (At least we shouldn't have); <b>It's a rule</b>
  
## Rules of Hooks
1. Only call React Hooks in React functions (Components function, Custom react hooks)
2. Only call React Hooks at the Top Level (Don't call in nested functions and block statements)
3. Unofficial, add everything you refer to inside of useEffect() as a dependency, except set function of useState

## Side Effects
Here's example of `useEffect()`

```javascript 
  useEffect(() => {
    console.log('Execute function');
    
    // This is a clean up function
    return () => {
      console.log('clean up function does something')
    };

  
    }, 
    
    [] // <- dependencies
  );
```

`useEffect` runs every time after component or dependency is updated.
Dependencies must be some value, variable, state that would be updated - and cause to run `useEffect()`

If there's empty array of dependencies - useEffect will run <b>once</b> after component is updated (on render cycle).

Clean up function runs before main function except the first time. Very usefull for example to clear timeout.

## React Context
[React Context](https://reactjs.org/docs/hooks-reference.html#usecontext) is <b>NOT</b> optimized for high frequency changes, therefore use case is more like locale/theme/auth.
Context are located in store, state, context folders.

```javascript
  const AuthContext = React.createContext({
    isLogged: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
  })
```

Inside of `createContext()` goes anything you want to use as a state. Most of the time it's an object. 
Inside of passing object you can store functions. For better IDE completion put function inside of it, to know what you can access thru that context.

Then you need to wrap a component that needs access to context:

```javascript
  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: isLoggedIn
     }}>
      <App />
    </AuthContext.Provider>
  );
```

Then you need to set up a Consumer, to work manipulate with context. You can use `<AuthContext.Consumer>` or useContext();