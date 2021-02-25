import React, { Component } from 'react'


class Restart extends Component {
    restart = () => {
        this.props.restartGame()
    }

render (){
    return (
        <>
        <div>
        <React.Fragment>
            <button id = "restartbutton" onClick = {this.restart}>Restart Game Baby</button>
        </React.Fragment>
        </div>
        </>
    )
}
}
export default Restart