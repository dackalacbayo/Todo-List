import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './component/TodoInput'

class App extends Component {

  state = {
    search:'',
    note: '',
    details:{},
    notes:[]
  }


  handleChange(prop, e){
    this.setState({[prop]:e.target.value})
  }


  handleSave(){
    var obj = {
      id:this.state.details.id,
      note:this.state.note
    }
    this.setState({
      notes: this.state.notes.concat(obj),
      note: ''
    })
    }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <TodoInput
          notes = {this.state.notes}
          note = {this.state.note}
          handleChange={this.handleChange.bind(this,'note')}
          handleSave={this.handleSave.bind(this)}/>
      </div>
    );
  }
}

export default App;
