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

//