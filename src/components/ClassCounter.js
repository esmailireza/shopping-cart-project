import React, { Component } from "react";
class ClassCounter extends Component {
  state = {
    count: 0,
  };

  addOneHandler = () => {
    this.setState((prevCounter) => {
      console.log(prevCounter);
      return { count: prevCounter.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.addOneHandler}>add one</button>
      </div>
    );
  }
}

export default ClassCounter;
