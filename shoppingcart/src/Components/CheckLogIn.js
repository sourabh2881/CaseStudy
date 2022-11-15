import React, { Component } from 'react'

class CheckLogIn extends Component {
    
    render() {
        let userExist = false
        if(localStorage.getItem("id")){
            userExist = true
        }
        return (
            <div>
                {this.props.name(userExist)}
            </div>
        )
    }
}

export default CheckLogIn