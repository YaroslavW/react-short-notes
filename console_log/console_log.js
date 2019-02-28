// WRONG!!!!
render() {
    return (
      <div>
        <h1>List of countries</h1>
        console.log(this.props.countries)
      </div>
    );
  }

// ==>  Wright Method   
render() {
    return (
      <div>
        <h1>List of countries</h1>
        { console.log(this.props.countries) }
      </div>
    );
  }

// ==> Another popular solution widely in use :
render() {
    console.log(this.props.countries)
   return (
     <div>
       <h1>List of countries</h1>     
     </div>
   );
 }


// ==> Create custom component for console.log.
const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };

// Then you can use it like this :
  render() {   
    return (
      <div>
        <h1>List of countries</h1>   
        <ConsoleLog>{ this.props.todos }</ConsoleLog>  
      </div>
    );
  }