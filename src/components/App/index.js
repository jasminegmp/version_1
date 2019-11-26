import React from 'react';
import Loader from '../Loader';
import Landing from '../Landing';

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        loading: true
    };
  }

  componentDidMount() {
    setTimeout(() =>{ //Start the timer
      this.setState({loading: false}) //After 1 second, set render to true
    }, 4000);
  }
  render() {
      if (this.state.loading) return <Loader/>;
      return <Landing/>;
  }
}

export default App;
