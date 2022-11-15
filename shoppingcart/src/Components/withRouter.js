import React from 'react'
import { useNavigate } from 'react-router-dom'

const WithRouter = OriginalComponent => {
    
    
    function NewComponent(){
        const navigate = useNavigate();
      return (
        <OriginalComponent navigate={navigate} />
      )
    }
    
    // class NewComponent extends React.Component{
    //     render(){
    //         return <OriginalComponent navigate={navigate} /> 
    //     }
    // }
    return NewComponent
}

export default WithRouter