import React, { Component } from "react";

class Square extends Component {
	
handleClick = () => {
  this.props.handleGamePlay(this.props.index)
}
render() {
  return(
    <React.Fragment>
      <div id = 'Square' onClick = {this.handleGamePlay}>
        {this.props.value}
      </div>
    </React.Fragment>
  )
}
}
export default Square;
