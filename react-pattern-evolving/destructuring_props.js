const Details = ( { name, language } ) => (
    <div>
      <p>{ name } works with { language }</p>
    </div>
  );
  
  class Details extends React.Component {
    render() {
      const { name, language } = this.props;
      return (
        <div>
          <p>{ name } works with { language }</p>
        </div>
      )
    }
  }