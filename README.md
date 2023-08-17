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