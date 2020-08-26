import React, { Component } from 'react'
import DisplayName from "./DisplayName"
import DisplayNumber from "./DisplayNumber"
import DisplayAddress from "./DisplayAddress"

class DisplayInformation extends Component 
{
    render() {
                let { name, address, phone } = this.props;
                return (
                    < div >
                    <DisplayName
                        name={name} />

                    <DisplayAddress
                        address={address} />

                    <DisplayNumber
                        number={phone} />
                    <p> {this.props.status ? "active" : "inactive"}</p>
                    
                </div >
                )
             }
}
    
export default DisplayInformation