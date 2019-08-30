import React from 'react'

export class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1
    };
    this.intervalReference = setInterval(() => this.handleIncrement(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalReference);
  }

  handleIncrement = () => {
    let counter = this.state.counter + this.state.step;
    this.setState({
      counter
    });
    this.props.tick(counter);
  }

  handleStepChange = (event) => {
    const newStep = +event.target.value;
    this.setState({
      step: newStep
    });
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.step} onChange={this.handleStepChange} />
        <button onClick={this.handleIncrement}>{this.state.counter}</button>
      </div>
    )
  }
}
