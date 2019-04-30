// Avoid this is the components are too "heavy" to mount/unmount
function Component(props) {
  const [view, setView] = useState('view1');
  return view === 'view1' ? <SomeComponent /> : <AnotherComponent />  
}

// Do this instead if you' re opting for speed & performance gains
const visibleStyles = { opacity: 1 };
const hiddenStyles = { opacity: 0 };
function Component(props) {
  const [view, setView] = useState('view1');
  return (
    // <React.Fragment>
    //   <SomeComponent style={view === 'view1' ? visibleStyles : hiddenStyles}>
    //   <AnotherComponent style={view !== 'view1' ? visibleStyles : hiddenStyles}>
    // </React.Fragment>
    console.log('comment because not import')
  )
}