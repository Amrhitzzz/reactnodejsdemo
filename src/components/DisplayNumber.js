import React, { Component } from 'react'

class DisplayNumber extends Component {
    render (){
        let {number} =this.props
        return(
            <div>
        <h3>{number}</h3>
        </div>
        )
     
    }
}
export default DisplayNumber;