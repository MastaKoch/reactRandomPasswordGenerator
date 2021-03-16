import React, { Component } from 'react';



class App2 extends Component {
  constructor(props){
    super(props);
    this.state = {
        // initial state for pwd length and all char bools
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lower: "abcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
        special: "!#$%&'()*+,-./:;<=>?@[]]^_`\{|}~",
        values: "",
        password: ""  
    }

}

  getCriteria = () => {
let options= ""
// ask all prompts and confirms preceded by window.
var upperConfirm = window.confirm("Do you want upppercase letters in your password?");
if (upperConfirm){
 options += this.state.upper

}

var lowerConfirm = window.confirm ("Do you want lowercase letters in your password?");
if (lowerConfirm){
    options += this.state.lower
  
}
var numbConfirm = window.confirm ("Do you want numbers in your password?");
if (numbConfirm){
    options += this.state.number
}
var specConfirm = window.confirm ("Do you want special characters in your password?");
if (specConfirm){
    options += this.state.special
}
this.setState({values: options}, ()=> {
    var complexity =   

prompt("How long do you want your password to be (8-128 characters)? Passwords will automatically generate with uppercase, lowercase letters, special characters, and numbers.");

if (complexity < 8) {
alert("Password must be between 8 and 128 characters.");
return "n/a";
}

if (complexity > 128){
alert("Easy there, champ. Password must be between 8 and 128 characters.");
return "n/a";
}

let password=""
// create for loop to choose password characters
for(var i=1; i <= complexity; i++){

password += this.state.values.charAt(Math.floor(Math.random()* Math.floor(this.state.values.length-1)))

};

this.props.sendInfo(password);
})

 
// this.setState({}) all the values from above

//   set password length / complexity


}

      

  
  // add all your methods for generating a password from the above state
  render(){

    // run all the above methods to calculate the password before rendering    
    return (
        <div className="card-footer">
        <button id="generate" className="btn" onClick={this.getCriteria}>Generate Password</button>
      </div>
    )
  };
}

export default App2;