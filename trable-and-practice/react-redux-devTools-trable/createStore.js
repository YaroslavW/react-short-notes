export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//  trable:
// Cannot read property 'apply' of undefined
// I made my local machine as a React JS Server and tried to serve the URL to everyone in my 
// team. But alas! It didn't work out for me. I get the following error, in multiple flavours,
//  as my colleagues were using different types of machines - Windows, Linux and macOS 

// Solution
export default createStore(  
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? a => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// I check for the existence of the Redux DevTools in the window object and if don't find it,
//  instead of doing a short-circuit, I tried using a ternary operator that returns a function 
// that returns the first parameter when invoked. Woah, and it worked. This can potentially be 
// a solution or Redux DevTools can do a type-check before calling the apply() method.
