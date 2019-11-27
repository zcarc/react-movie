import React from 'react';

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false, book: '123'});
    }, 6000);
  }

  render(){
    const { isLoading, book } = this.state;
  return <div>{isLoading ? "Loading" : "We are ready"},{book}</div>;
  }
}

export default App;
