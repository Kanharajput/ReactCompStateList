# if don't understand what is happening revisit the repo JsForReact https://github.com/Kanharajput/JsForReact
# some code deleted as we moved on so check the commits to watch the code of a particular topic.
- A single component will return a single element. Means everything which is return by a component must be wrapped inside 
    a div.

- Execute expression inside jsx using the curly bracket {} the code inside braces will run and the output will be take over
    by the jsx.

- Use component as a html element. Using this we can save some css code and also make our code more         
    understandable.
    - Create a component normally like we do 
    - then use that component as a tag in jsx of another component.
    - to add the classes to 'tag component' add this code. It will declare that which classes than itself it 
        has to add to it's element. code -> classes = 'card' + props.className; Add this code to root element of
        'tag component'.
    - 'tag component' will only show the content which is wrapped inside it when this code is added to root 
        element. code -> {props.children} . It will declare that all code wrapped inside the 'tag component' is 
        it's children element.

- Why jsx only return a single element.
    - Because jsx under the hood use react library to create the element. And that library creates the element
    this way
    ```
        React.createElement('div',{here comes attibutes},
                            React.createElement('h2',{},'lets get started'),
                            React.createElement('p',{},'understand or not)
                            )
    ```
    That's why can't return more than one element because behind the scene the code which transfers jsx into 
    html will wrap all elements into a single wrapper element and renders it.

# Now Start with Events
Basically react js handle all the events which are in js DOM.
> One thing to remember is that react js is descriptive so that we won't select an element and add listener on it.
    While we add onclick method in jsx which takes a function which runs when that event execute.

- Normally when we change a variable value in react js it will not change it on the ui. For that we have to state hooks
    which re render the component on which the state is changed.

- We can take the input of the user when he entered in a field by a event handler 'onChange' . This event will call each
    when there's a change in the field. Just a single keystroke also let to run.
    - Also the function which we use to handle this event will automatically an a event as a arguement to get the value out
        of it.
    
- If a component has mulitple states then there's a way to write them a single state 
```
const [useInput, setUserInput] = useState({
                                    title: '',
                                    amount: '',
                                    date: ''
                                });
```

    - But one thing not here is that each time a state is updated we have to declare all the states again 
        which are not changed otherwise they will lost. Check code in commits.
    - One more way is there to pass the handle multi states by a hook. React will add prevState paramerter
        to handling state so that it can acquire previous states of variables which are not changed now.

    - Let's suppose there is single state which we want to update and we need the previous value of it
        then react js by default provide it in the variable name like prevState(here State is the name of
        of variable which used inside the state) using this we can get the previous value of this state.
        But this value is only provide in the function's parameter of the function which is passed as a parameter to change the state of function.
        ```
        const [counter, setCounter] = useState(0);
        function handleClick(){
            setCounter(prevCounter => prevCounter + 1)
        }
        ```

- Handle all events by just a single function. Basically onChange(or any event listener) function provide 
    event to function parameter which is going to handle that function. So we created a anonymous function and get the value from that event and call a modified function for that function.
