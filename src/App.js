import React from 'react';
import axios from "axios";

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = await axios.get('http://yts-proxy.now.sh/list_movies.json');
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, book } = this.state;
  return <div>{isLoading ? "Loading..." : "We are ready"},{book}</div>;
  }
}

export default App;
