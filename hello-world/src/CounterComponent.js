import React from 'react'

export class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.intervalReference = setInterval(() => this.handleIncrement(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalReference);
  }

  handleIncrement = () => {
    console.log('ahoj')
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>{this.state.counter}</button>
      </div>
    )
  }
}
