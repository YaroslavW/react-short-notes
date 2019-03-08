const Details = ( { name, language } ) => (
    <div>
      <p>{ name } works with { language }</p>
    </div>
  );
  
  const Layout = ( { title, ...props } ) => (
    <div>
      <h1>{ title }</h1>
      <Details { ...props } />
    </div>
  );
  
  const App = () => (
    <Layout 
      title="I'm here to stay"
      language="JavaScript"
      name="Alex"
    />
  );