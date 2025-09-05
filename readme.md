1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer - getElementById => To get specific element by its id.

         getElementsByClassName => To get element list by a common class name.

         querySelector => Select element like css selector. It gives only first matched item.

         querySelectAll => Select element like css selector. It gives all matched item.

2. How do you create and insert a new element into the DOM?
    Answer - The Method is to create an element is document.createElement(elementName).
    example - const div = document.createElement('div') and Select an element where   append element.
    example - section.appendChild(div)


3. What is **Event Bubbling** and how does it work?
    Answer - Event Bubbling is a DOM method. when user click on specific element it occur event in parentElement, grandElement. This method continuing up to document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
    Answer - Event delegation is one listener on the parent, handle children through bubbling. It’s useful for efficiency, dynamic content, and cleaner code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
    1. event.preventDefault() - Stops the default action of the event from happening.
       It does not stop bubbling.

    2. event.stopPropagation() - Stops the event from bubbling (or capturing) further in the DOM tree.
    It does not stop the default action.