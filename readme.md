
## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

				*** Answer the questions***

1. getElementById: Selects a single element based on its unique id attribute.Only one element is available.
getElementsByClassName: Selects all elements that possess a specific class name.Multiple elements are available.
querySelector / querySelectorAll : Selects all elements that match a specified CSS selector.

2.There are two main steps to creating and inserting a new element into the Document Object Model (DOM) in JavaScript. creating the element ( getElementById ) and then attaching it to an existing element in the DOM ( insertAdjacentElement ).

3.  Event bubbling is a browser mechanism where a triggered DOM event travels upward from the target element, triggering event listeners on each element up to the document root.
Event bubbling works by causing the event to occur first on the button, then to the parent, and then to anything above the parent, if any.

4.Event delegation is a powerful pattern in JavaScript that improves both the performance and maintainability of your code. It is useful when working with dynamic content or a large number of elements. By using event bubbling, you can reduce the number of event listeners and streamline your code.

5.event.preventDefault():
This method prevents the default action associated with an event from occurring. It is used to prevent form submissions, link navigation.
stopPropagation():This method prevents the event from propagating further up or down the DOM tree. Clicking on a child button does not go to the parent.

