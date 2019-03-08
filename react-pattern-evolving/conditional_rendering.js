//  ====>>> Not right!!!

const condition = true;

const App = () => {
  const innerContent = condition ? (
    <div>
      <h2>Show me</h2>
      <p>Description</p>
    </div>
  ) : null;
  
  return (
    <div>
      <h1>This is always visible</h1>
      { innerContent }
    </div>
  );
};



// ==== >>> RIGHT !!! 
const condition = true;

const App = () => (
  <div>
    <h1>This is always visible</h1>
    {
      condition && (
        <div>
          <h2>Show me</h2>
          <p>Description</p>
        </div>
      )
    }
  </div>
);