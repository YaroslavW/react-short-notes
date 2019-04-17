import React from "react";
import ReactDOM from "react-dom";
import List from './List';
import "./styles.css";
const COUNT = 5000;
const demoData = Array.from({
  length: COUNT
}).map((_, i) => ({
  id: i,
  name: Math.random()
}));
class App extends React.Component {
  state = {
    list: demoData,
    title: ''
  }
  tick() {
    const newList = [...this.state.list];
    newList.forEach(item => {
      item.name++;
    });
    this.setState({
      list: newList
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input value={this.state.title} onChange={this.handleChange} />
        <List data={this.state.list} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
