import React, { Component } from 'react'

class DisplayAddress extends Component {
    render (){
        return(
            <div>
            <h2>{this.props.address ? this.props.address:"null"} </h2>
        </div>
        )
     
    }
}
export default DisplayAddress