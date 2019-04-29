// index.jsx
export default function ParentComponent(props) {
  return (
    <div>
      <SomeComponent someProp={props.somePropValue}
    <div>
      <AnotherComponent someOtherProp={props.someOtherPropValue} />
    </div>
   </div>
 )
}


// ./SomeComponent.jsx
export default function SomeComponent(props) {
  return (
    <div>{props.someProp}</div>  
  )
}

// --------------------------------------------

// ./AnotherComponent.jsx (1st variation)
// This component will render anytime the value of `props.somePropValue` changed
// regardless of whether the value of `props.someOtherPropValue` has changed
export default function AnotherComponent(props) {
  return (
    <div>{props.someOtherProp}</div>  
  )
}

// ./AnotherComponent.jsx (2nd variation)
// This component will render only render when its *own* props have changed
export default memo((props) => {
  return (
    <div>{props.someOtherProp}</div>  
  )
});

// ./AnotherComponent.jsx (3rd variation)
// This component will also render only render when its *own* props have changed
class AnotherComponent extends React.PureComponent {
  render() {
    return <div>{this.props.someOtherProp}</div>   
  }
}

// ./AnotherComponent.jsx (4th variation)
// Same as above, re-written
class AnotherComponent extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }
  
  render() {
    return <div>{this.props.someOtherProp}</div>   
  }
}