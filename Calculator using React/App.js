import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {

   state = {
      num1: 0,
      num2: 0
    };
  
    updateInput = e => {
      this.setState({
        [e.target.name] :  parseInt(e.target.value)
      });
    };
  
    add = () => {
      const { value1, value2 } = this.state;
      alert("The SUM is " + (value1 + value2));
    };
  
    substract = () => {
      const { value1, value2 } = this.state;
      alert("The Substraction is " + (value1 - value2));
    };
    multiply = () =>{
      const { value1, value2 } = this.state;
      alert("The Multiplication is " + (value1 * value2));
    }
    division = () =>{
      const {value1, value2} = this.state;
      alert("The Division is " + (value1/value2));
    }
    render() {
      return (
        <div>
          <input
            placeholder="first value"
            value={this.state.inputValue}
            name="value1"
            onChange={e => this.updateInput(e)}
          />
          <input
            placeholder="second value"
            value={this.state.inputValue}
            name="value2"
            onChange={e => this.updateInput(e)}
          />
        <table>
          <tr>
          <td colSpan="3"><button onClick={this.add}>+</button></td>
          <td colSpan="3"><button onClick={this.substract}>-</button></td>
          <td colSpan="3"><button onClick={this.multiply}>*</button></td>
          <td colSpan="3"><button onClick={this.division}>/</button></td>
          </tr>
        </table>
          
        </div>
      );
    }
  }

export default Calculator;
