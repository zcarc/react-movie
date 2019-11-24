import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{

  state = {
    count: 0
  };

  add = () => {
    console.log('add');
  }
  minus = () => {
    console.log('minus');
  }

  // this.add() 중괄호의 의미는 즉시실행한다는 의미이다.
  // this.add는 클릭했을 때만 실행된다는 의미이다.
  render(){
  return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
