import React , { Component } from "react";
class Students extends Component{
    constructor(){
        super(); 
        this.state={
            marks:60
        }
    }
    increaseMark(){
        //let marks=this.state.marks
        if (this.state.marks<100){
            this.setState ({
                marks:this.state.marks+5
    
            })
        }    
        else alert("your marks is more than 100")
    }

    decreaseMark(){
            //let marks=this.state.marks
        if (this.state.marks>0){
            this.setState ({
                marks:this.state.marks-5
        
            })
        }    
        else alert("your marks is less than 100")
    }    
    
    render(){
        return(
        <center>    
        <div style={{backgroundColor:"aqua" ,width:"700px",padding:"40px",border:"solid 20px deeppink"}}>
            <h1 style={{color:"red",backgroundColor:"yellow"}}>STUDENT COMPONENT STATE VARIABLES IN REACT</h1> 
            <h3 style={{color:"blue"}}> Student Rollno. is : {this.props.studentsrollno}</h3>
            <h3 style={{color:"blue"}}> Student Firstname is :{ this.props.studentname} </h3>
            <h3 style={{color:"blue"}}> Student Marks is :{ this.state.marks} </h3>
            
            <button onClick={()=>{this.increaseMark()}} style={{color:"pink",backgroundColor:"blue"}}> Increase Mark by 5</button>
            <button onClick={()=>{this.decreaseMark()}} style={{ marginLeft:"5px",color:"pink",backgroundColor:"blue"}}> Decrease Mark by 5</button>

        </div>
        </center>
        )
    }
}

export default Students;


