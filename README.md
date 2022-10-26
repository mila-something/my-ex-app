1. Vezba :
Create app with 4 pages (Home,  About, UserProfile, NotFound)
 In every page add heading with page name  example (<h1>HOME</h1>)
Create routes for all the pages
Use routing to the corresponding pages (react-router-dom)

2. Create header and footer components:
 Add the header and footer components in every page except the NotFound page
 Add some styles on them.
In the header component create menu with all the links to all the pages.
In the footer add the current date.
In Not found page add button that can bring you to the last visited page

--------Domasno-----------

1. What is props in a React component ?
Props is short for properties. In the React component we can take or accept props with some kind of data in them, usually they are objects with data, and we use them in the component, and render them as React elements.

2. Why we need keys during mapping an array ?
Every element in the array has its own key, usually the keys we give them are identical to the id of the element (if the id is unique). Even if we don't give the elements unique keys, React will give them for us, by making them the same as the index in the array. This could cause a problem depending on where and how we use the elements from the array. If we have a tree with subtrees, or if we ever want to change the order of the elements in the array, we MUST have unique keys to the elements. 

3. What is the difference between functional React component and class based React component ?
The functional React components are more common, they are written as JavaScript functions and are much easier to use. 
While class components are written as a class but they also have to include extends React.Component so that the component can have access to React.Component's functions. Also in class components there must be a render method that returns the HTML code.

4. What is state in React ?
State is a JavaScript object that controls the behavior of a component. When there is a change in a state the component re-renders. When the user clicks on some element of the page, and something happens its usually a change in the state. The state in React is used as a hook in the function components.

5. What is the difference between props and state in React ?
Props are objects with data used in the component. While state is a object that controls the change of the component.

6. What is conditional rendering?
Depending on the state of the app we can use conditions to change the rendering of the user interface. For example if the user is logged in or logged out the user interface will be different, this is where we use conditional rendering.

7. How do you implement conditional rendering?
By using if... else statement, switch statement or ternary operators.
