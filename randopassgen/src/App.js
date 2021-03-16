import './App.css';
import App2 from './components/randoPassword';
import { Component } from 'react';

class App extends Component {

  state={
    password: "",
  }

  sendInfo = (password) => {
    console.log(password)
    this.setState({
      password:password
    })
  }
  render() {
    return (
<div className="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      
      <div className="card">
        <div className="card-header">
          <h2>Generate a Password</h2>
        </div>
        
        <div className="card-body">
          <textarea
            readOnly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
            value={this.state.password}
          ></textarea>
        </div>
        
      < App2 sendInfo={this.sendInfo}/>
      </div>
          <div id="length"></div>
    </div>
    )
  }
}
  

export default App;
