import React from 'react';
import { render } from 'react-dom';

class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    }
  }
  componentDidMount() {
    this.setState({ content: this.props.loading() })
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        res => this.setState({ content: this.props.done(res) }),
        res => this.setState({ content: this.props.error() })
      )
  }

  render() {
    return this.state.content;
  }
}

const App = () => (
  <Fetch
    url="https://www.booknomads.com/api/v0/isbn/9789029538237"
    loading={() => (
      <div>Loading ... </div>
    )}
    done={(book) => (
      <div>You asked for: { book.Authors[0].Name } - {book.Title}</div>
    )}
    error={() => (
      <div>Error fetching content</div>
    )}
  />
);

render(<App />, document.getElementById('root'));
// template - create-react-app