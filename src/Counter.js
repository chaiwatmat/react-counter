import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {value: 0};

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(){
    this.setState({value: this.state.value + 1});
  }

  decrease(){
    this.setState({value: this.state.value - 1});
  }

  render() {
    return (
      <div>
          <p>value = {this.state.value}</p>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
