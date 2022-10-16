// 1) Order of Priority of ReactDOM Rendering - the Later ReactDOM.render Overwrites the former.  

function Element(){
    return(                            //--> Inside return we write JSX
        <h1>Karun</h1>
    )
}

function Main(){            /// here Main is a Component  
    return(
        <React.Fragment>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
        </React.Fragment>
    )
}
ReactDOM.render(<Main/>, document.getElementById("root"));
ReactDOM.render(<Element/>,document.getElementById("root"));

// Here the output would be just "Karun" because the Later ReactDOM.render Overwrites the former.


// 2) Make a Counter using Functional or Class Component

// 3) Error Handling - how do you handle an error in react 

// 4) what is render prop ?



/* Functional Components ---------------------

- Functional Components are simpler compared to class Components.
- Functional Components can have state and mimic lifecycle events using React Hooks.
- Functional Components mainly focuses on the UI of the application, not on the behavior.
*/



/*
Q) what is Strict Mode in react ?
- it is a tool for highlighting Potential problems in an application, like fragments, Strict Mode does not render 
any visible UI, it activates additional checks and warnings for it's descendants.

Note : Strict Mode checks are run in development mode only, they do not impact the production build.

StrictMode currently helps with:

- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Warning about deprecated findDOMNode usage
- Detecting unexpected side effects
- Detecting legacy context API
- Ensuring reusable state
*/



// In React _____is immutable , we cannot modify it from inside the component -> Props.

// What is used for binding event handler methods that occur in your component in React? -> Constructor




/* Select the React component for which the below statements hold correct.


1.It maintains its internal states.
2.It has limited control over the form elements and data.    --  Uncontrolled Component
3.It uses a ref for their current values. 
*/



/* What is the importance of keys in React?

- Keys should be given to array elements for providing a unique identity for each element.
- Keys help react identify which elements were added, changed or removed.
*/



/* Assuming there is a function named “Popup”. Select the right syntax to call this function in React.

-> <button onClick={Popup}> Popped </button>
*/



// What allows you to group a list of children without adding extra nodes in the DOM in React? - Fragment



/*State true or false.

1. Multiple Profilers component cannot be used in React.   -- False

2.Profiler component cannot be Nested to measure different component in React.   -- False
*/



// react-router-dom is used for?   ->   Web Applications