# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript UI library developed by Facebook to help power their complex and data-heavy product. It renders, manages, and updates data through its' concept of state, as it also renders UI. State and UI are rendered through components (small comparmentalized pieces of code) on the virtual DOM - this helps keep state and expensive functionality out of the DOM. All this together makes React a powerful tool to create flexible, dynamic, scalable applications.

1.  What does it mean to _think_ in react?

Thinking in React means considering how to break down larger applications into smaller pieces, so that the pieces may be reused elsewhere. If you're given a design mock-up, it means being able to look at it and make a diagram (physical or mental) of how it can be broken down into components. Once that's decided, you can start by building a static version of your app, and then as you go along decide which components need to be dynamic and hold state.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful component usually is responsible for managing and communicating state. This is stored on its constructor. A functional/presentational component is usually responsible for rendering UI or other components. Functional components may receive state from a parent component, but it does not manage its own state.

1.  Describe state.

State is the internal storage of data inside an app. State usually receives data from an outside source (like an API), but other elements can be stored inside it as well (like input text in a form, a count of how many times an event happens on a page, etc). State gets passed down to child components via props. 

1.  Describe props.

Props are read-only attributes that get passed from parent components to child components (and so on). Props can be things like state data, functions, and methods.
