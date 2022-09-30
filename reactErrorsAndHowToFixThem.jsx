// 1) TypeError: react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.render is not a function
// S: we have to use this -- > const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(<App/>);
//instead of this --> ReactDOM.render(<App />, document.getElementById('root'));