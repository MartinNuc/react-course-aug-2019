import React from 'react'
import axios from 'axios';

export class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: null,
      isLoading: true
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload = () => {
    this.setState({
      isLoading: true
    });
    axios.get('https://api.chucknorris.io/jokes/random').then(
      response => this.setState({
        joke: response.data.value,
        isLoading: false
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? 'Nacitam' : this.state.joke}  
        <button onClick={this.reload}>reload</button>
      </div>
    )
  }
}
