import React from 'react';

class App extends React.Component{

  state = {
    count: 0
  };

  add = () => {
    //this.setState({count: this.state.count + 1})
    this.setState(current => ({count: current.count + 1}))
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}))
  }

  // componenetDidMount()는 constructor와 render가 실행된 후에 실행된다
  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }


  // this.add() 중괄호의 의미는 즉시실행한다는 의미이다.
  // this.add는 클릭했을 때만 실행된다는 의미이다.
  render(){
    console.log('I am renderring');
  return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
