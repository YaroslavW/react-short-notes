// Don't do this!
function Component(props) {
  return <AnotherComponent onChange={() => props.callback(props.id)} />;
}

// Do this instead :)
function Component(props) {
  const handleChange = useCallback(() => props.callback(props.id), [props.id]);
  return <AnotherComponent onChange={handleChange} />;
}

// Or this for class-based components :)
class Component extends React.Component {
  handleChange = () => {
    this.props.callback(this.props.id);
  };

  render() {
    return <AnotherComponent onChange={this.handleChange} />;
  }
}
