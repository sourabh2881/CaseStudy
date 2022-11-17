import React, { Component } from 'react'
import WithRouter from './withRouter'

export class SearchString extends Component {

componentDidMount(){
    this.props.navigate("/")
}

    render() {
        return (
            <></>
        )
    }
}

export default WithRouter(SearchString)