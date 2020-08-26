import React, { Component } from 'react'

class DisplayName extends Component {
    render (){
        return(
            <div>
            <h1>{this.props.name ? this.props.name:"null"} </h1>
        </div>
        )
     
    }
}
export default DisplayName