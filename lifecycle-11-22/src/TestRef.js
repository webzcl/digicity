import React from 'react';

import Add from './Add';

class TestRef extends React.Component{
  handleClick(){
    this.refs.add.handleClick();
  }
  render(){
    return(
      <div>
        <Add ref='add'/>
        <button onClick={this.handleClick.bind(this)}>父组件加一</button>
      </div>
    )
  }
}

export default TestRef;
