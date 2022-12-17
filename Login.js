import React, { Component } from 'react';
//class section 
class Login extends Component{
    //render method - to display the output 
    render(){
        return(
        <center>  
        <div style={{backgroundColor:"pink" ,width:"700px",padding:"40px",border:"solid 5px blue"}}>
            <form>
                <label>
                    <h1 style={{color:"blue",backgroundColor:"white"}} >Login Pages</h1>
                    Name:<input type="text" name="name" /><br></br><br></br>
                    Password:<input type="text" pw="password" /><br></br><br></br>
                    <button style={{color:"white",backgroundColor:"green"}}>Login</button>
                </label>
        </form>
        </div>
        </center>
        )
    }
}
//export section  -- component is ready to be reused in another files 
export default Login;


