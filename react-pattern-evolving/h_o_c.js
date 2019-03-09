//  Let’s implement a basic HOC that can add props to existing components.

const withProps = ( newProps ) => ( WrappedComponent ) => {
    const ModifiedComponent = ( ownProps ) => ( // the modified version of the component
      <WrappedComponent { ...ownProps } { ...newProps } /> // original props + new props
    );
  
    return ModifiedComponent;
  };
  
  const Details = ( { name, title, language } ) => (
    <div>
      <h1>{ title }</h1>
      <p>{ name } works with { language }</p>
    </div>
  );
  
  const newProps = { name: "Alex" }; // this is added by the hoc
  const ModifiedDetails = withProps( newProps )( Details ); // hoc is curried for readability
  
  const App = () => (
    <ModifiedDetails 
      title="I'm here to stay"
      language="JavaScript"
    />
  );

//   If you like functional programming, you will love working with high order components. Recompose is a great package that gives you all these nice utility HOCs like withProps, withContext, lifecycle, and so on.

// Let’s have a look at a very useful example of reusing functionality.
function withAuthentication(WrappedComponent) {
    const ModifiedComponent = (props) => {
      if (!props.isAuthenticated) {
        return <Redirect to="/login" />;
      }
  
      return (<WrappedComponent { ...props } />);
    };
  
    const mapStateToProps = (state) => ({
      isAuthenticated: state.session.isAuthenticated
    });
  
    return connect(mapStateToProps)(ModifiedComponent);
  }