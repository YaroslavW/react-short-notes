import * as React from "react";
import ReactDOM from "react-dom";
import List from './List';
import "./styles.css";

console.log(ReactDOM);
// flushSync
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
    title: 'Hello'
  }
  tick() {
    // ReactDOM.flushSync(()=>{
    this.setState(state => {
      const newList = state.list.map(item => ({
        ...item,
        name: item.name++
      }));
      console.log(newList[0].name)
      return { list: newList }
    });
  }
  // })




  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      title: value
    }));
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
const ConcurrentMode = React.unstable_ConcurrentMode;
console.log(ConcurrentMode);
const rootElement = document.getElementById("root");
ReactDOM.render(<ConcurrentMode><App /></ConcurrentMode>, rootElement);
