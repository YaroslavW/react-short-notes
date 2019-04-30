// don't do this!
function Component(props) {
  const someProp = heavyCalculation(props.item);
  return <AnotherComponent someProp={someProp} />;
}

// do this instead. Now `someProp` will be recalculated
// only when `props.item` changes
function Component(props) {
  const someProp = useMemo(() => heavyCalculation(props.item), [props.item]);
  return <AnotherComponent someProp={someProp} />;
}
