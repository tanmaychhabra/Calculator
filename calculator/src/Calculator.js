import React, {Component} from 'react'

class Calculator extends Component{
    state= {
        total: "",
        display: "",
        operator: ""
    } 

     
render(){
    const updateDisplay = (currentCount) =>{
        
        this.setState({
            display: this.state.display + currentCount
            
        }
        
        )
    }

    

    const operate = (op) =>{
        this.setState({
            total: this.state.display,
            operator: op,
            display: ""
        }
        )
    }

    const equal = () =>{
        let result;
        switch(this.state.operator){
            
            case "+": {
                result = Number(this.state.total) + Number(this.state.display)
            }
            case "-": {
                result = Number(this.state.total) - Number(this.state.display)
            }
            case "*": {
                result = Number(this.state.total) * Number(this.state.display)
            }
        }
        this.setState({
            
            display: result

        })
    }
    return(
        <div>
           <h1>Calculator</h1>
           {this.state.display}
           <br/>
        <button onClick = {() => updateDisplay(1)}>1</button>
        <button onClick = {() =>updateDisplay(2)}>2</button>
        <button onClick = {() =>updateDisplay(3)}>3</button>
        <br />
        <button onClick = {() =>updateDisplay(4)}>4</button>
        <button onClick = {() =>updateDisplay(5)}>5</button>
        <button onClick = {() =>updateDisplay(6)}>6</button>
        <br />
        <button onClick = {() =>updateDisplay(7)}>7</button>
        <button onClick = {() =>updateDisplay(8)}>8</button>
        <button onClick = {() =>updateDisplay(9)}>9</button>
        <br />
        <button onClick = {() =>updateDisplay(0)}>0</button>
        <br />
        <button onClick = {() =>operate("+")}>+</button>
        <button onClick = {() =>operate("-")}>-</button>
        <button onClick = {() =>operate("*")}>*</button>
        <br/>
        <button onClick = {() =>equal()}>=</button>

        </div>
    )
}
}
export default Calculator;