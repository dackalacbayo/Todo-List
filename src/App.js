import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './component/TodoForm'
import request from 'superagent'

class App extends Component {

  state = {
    note: '',
    notes:[],
    status:'',
    count:0,
    id:1,
    countdone:0
  }


  handleChange(prop, e){
    this.setState({[prop]:e.target.value})
  }

  handleSave(){
    var obj = {
      id:this.state.id,
      status:'Active',
      note:this.state.note
    }

    this.setState({
      notes: this.state.notes.concat(obj),
      note: '',
      count: this.state.count + 1,
      id: this.state.id + 1
    })
    }

    handleDelete(i){
      console.log(this.state.id)
        this.setState({
          count: this.state.count - 1
        })

      }

    handleDone(data){
      console.log('Dataaaaa',data)
      console.log('Stat:',statdone)

      var statdone = this.state.notes
      .map((msg)=> {
          if(msg.id === data.id){

          }
          return statdone
      })

      this.setState({
        count: this.state.count - 1,
        status:'Done',
        countdone: this.state.countdone + 1
      })
    }

  render() {
    console.log(this.state)
    return (
      <div className="App-container">
        <header className="App-header">
        </header>

        <div className="todos-container">
        <TodoForm
          notes = {this.state.notes}
          note = {this.state.note}
          count = {this.state.count}
          countdone = {this.state.countdone}
          handleChange={this.handleChange.bind(this,'note')}
          handleSave={this.handleSave.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          handleDone={this.handleDone.bind(this)}/>

        </div>
      </div>
    );
  }
}

export default App;
