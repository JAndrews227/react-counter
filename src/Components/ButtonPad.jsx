import React from 'react';

class ButtonPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //Increasing Formulas

  increaseOne() {
    this.setState({ count: this.state.count + 1 });
  }

  increaseTwo() {
    this.setState({ count: this.state.count + 2 });
  }

  increaseFive() {
    this.setState({ count: this.state.count + 5 });
  }

  increaseTen() {
    this.setState({ count: this.state.count + 10 });
  }

  //Decreasing formulas

  decreaseOne() {
    this.setState({ count: this.state.count - 1 });
  }

  decreaseTwo() {
    this.setState({ count: this.state.count - 2 });
  }

  decreaseFive() {
    this.setState({ count: this.state.count - 5 });
  }

  decreaseTen() {
    this.setState({ count: this.state.count - 10 });
  }

  //Reset

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <br></br>
        <button className='incOne' onClick={(e) => this.increaseOne(e)}>
          +1
        </button>
        <button className='incTwo' onClick={(e) => this.increaseTwo(e)}>
          +2
        </button>
        <button className='incFive' onClick={(e) => this.increaseFive(e)}>
          +5
        </button>
        <button className='incTen' onClick={(e) => this.increaseTen(e)}>
          +10
        </button>

        <button className='decOne' onClick={(e) => this.decreaseOne(e)}>
          -1
        </button>
        <button className='decTwo' onClick={(e) => this.decreaseTwo(e)}>
          -2
        </button>
        <button className='decFive' onClick={(e) => this.decreaseFive(e)}>
          -5
        </button>
        <button className='decTen' onClick={(e) => this.decreaseTen(e)}>
          -10
        </button>

        <button className='reset' onClick={(e) => this.reset(e)}>
          RESET
        </button>
      </div>
    );
  }
}

export default ButtonPad;
