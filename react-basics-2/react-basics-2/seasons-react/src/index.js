import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    console.log('componentDidMount()');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      console.log('children rendered');
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      console.log('children rendered - lat...');
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    console.log('render()');
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
