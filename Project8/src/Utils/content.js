export const accordionData = [
    {
        title: "What are the different data types in JavaScript?",
        content: "JavaScript has seven built‑in types: String, Number, Boolean, Null, Undefined, Symbol, and Object (which includes Arrays and Functions)."
    },
    {
        title: "Explain hoisting in JavaScript.",
        content: "Hoisting moves variable and function declarations to the top of their containing scope at compile time, so you can call functions or use vars before they appear in code."
    },
    {
        title: "What is a closure?",
        content: "A closure is an inner function that remembers variables from its outer scope even after that outer function has finished executing."
    },
    {
        title: "Difference between == and ===?",
        content: "`==` compares values with type coercion; `===` compares both value and type without coercion."
    },
    {
        title: "How does the `this` keyword work?",
        content: "`this` refers to the object that is executing the current function: in a method, it's the owner object; alone, it's the global object (or undefined in strict mode)."
    },
    {
        title: "What is event delegation?",
        content: "Event delegation leverages bubbling: you attach a single listener on a parent element to handle events on its child elements dynamically."
    },
    {
        title: "What are Promises in JavaScript?",
        content: "A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value."
    },
    {
        title: "Explain async/await.",
        content: "`async` functions return a Promise. Inside them, `await` pauses execution until the awaited Promise settles, making asynchronous code look synchronous."
    },
    {
        title: "Difference between var, let, and const?",
        content: "`var` is function‑scoped (or global), `let` and `const` are block‑scoped; `const` also disallows reassignment."
    },
    {
        title: "What is prototypal inheritance?",
        content: "Objects in JavaScript inherit properties and methods from a prototype object via an internal link called `[[Prototype]]`."
    },
    {
        title: "Describe the event loop.",
        content: "The event loop is a mechanism that pulls tasks from the callback queue to the call stack when the stack is empty, enabling non‑blocking I/O."
    },
    {
        title: "Sync vs. async JavaScript?",
        content: "Synchronous code runs line by line, blocking further execution; asynchronous code is dispatched and runs later, allowing the main thread to continue."
    },
    {
        title: "What is callback hell?",
        content: "Callback hell refers to deeply nested callbacks that make code hard to read and maintain; Promises and async/await help mitigate this."
    },
    {
        title: "Explain the spread operator (`...`).",
        content: "The spread operator expands iterable values (arrays, strings) or object properties into individual elements or key‑value pairs."
    },
    {
        title: "What are arrow functions?",
        content: "Arrow functions provide a concise syntax and lexically bind `this`, meaning they inherit `this` from their defining context."
    },
    {
        title: "What is debouncing vs. throttling?",
        content: "Debouncing delays execution until a function hasn’t been called for a set time; throttling limits execution to at most once per specified interval."
    },
    {
        title: "What is currying?",
        content: "Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument."
    },
    {
        title: "What is JSON?",
        content: "JSON (JavaScript Object Notation) is a lightweight, text‑based format for exchanging data, using key‑value pairs and array notation."
    },
    {
        title: "Explain Array methods map, filter, and reduce.",
        content: "`map` transforms each element, `filter` selects elements based on a condition, and `reduce` aggregates values into a single result."
    },
    {
        title: "What is the difference between `null` and `undefined`?",
        content: "`undefined` means a variable has been declared but not assigned; `null` is an assignment value meaning 'no value'."
    }
];
