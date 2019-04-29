// Don't do this!
function Component(props) {
  const aProp = { someProp: "someValue" };
  return <AnotherComponent style={{ margin: 0 }} aProp={aProp} />;
}

// Do this instead :)
const styles = { margin: 0 };
function Component(props) {
  const aProp = { someProp: "someValue" };
  return <AnotherComponent style={styles} {...aProp} />;
}
