import { Component, PureComponent } from "react";
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("rendered");
    return (
      <div>
        <h2>Class Compo.</h2>
        <button onClick={() => this.setState({ count: this.state.count })}>
          Increment value-{this.state.count}
        </button>
      </div>
    );
  }
}
export default App;
