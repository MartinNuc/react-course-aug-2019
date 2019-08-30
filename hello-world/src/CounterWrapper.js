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

  render() {
    return <>
      {this.state.visible && <CounterComponent />}
      <button onClick={this.toggleVsibility}>toggle</button>
    </>
  }
}