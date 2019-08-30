import React from 'react';
import { CounterComponent } from './CounterComponent';

export class CounterWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  toggleVsibility = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleTick = (count) => {
    if (count > 500) {
      this.setState({
        visible: false
      });
    }
  }

  render() {
    return <>
      {this.state.visible && <CounterComponent tick={this.handleTick} />}
      <button onClick={this.toggleVsibility}>toggle</button>
    </>
  }
}