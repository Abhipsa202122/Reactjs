import React, { Component } from 'react';
//class section 
class Hello extends Component{
    //render method - to display the output 
    render(){
        return(
        <div>
            <h1>Hello Component</h1>
        </div>
        )
    }
}
//export section  -- component is ready to be reused in another files 
export default Hello;