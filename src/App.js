import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './component/TodoForm'
import request from 'superagent'

class App extends Component {

  state = {
    note: '',
    notes:[],
    count:0,
    id:1,
    countdone:0,
    isChecked: '',
    totalChecked: 0
  }


  handleChange(prop, e){
    this.setState({[prop]:e.target.value})
  }

  handleSave(){
    var obj = {
      id:this.state.id,
      note:this.state.note,
      isChecked:false
    }
    this.setState({
      notes: this.state.notes.concat(obj),
      note: '',
      count: this.state.count + 1,
      id: this.state.id + 1
    })

  }

    handleDelete(item){
        this.setState({
          count: this.state.notes.length - 1
        })

        const deleteItem = this.state.notes
        if(deleteItem.indexOf(item) > - 1){
          deleteItem.splice(deleteItem.indexOf(item), 1)
          this.setState({notes: deleteItem})
        }
      }


    handleDone(data){

    const isChecked = this.state.isChecked

      var newList = this.state.notes
        .map(item => {
          const isSelected = item.id === data.id
          if (isSelected){ item.isChecked = !item.isChecked
            return item
          }
        })

        var totalChecked = this.state.notes.reduce(function(prev, next){
         var addAmount = next.isChecked ? 1 : 0
         prev += addAmount
         return prev
        },0)

        var count = this.state.notes
        this.setState({
          totalChecked:this.state.totalChecked,
          count:this.state.notes.length - totalChecked
        })

        console.log("totalchecked: ", totalChecked)
        console.log("Notess: ", this.state.notes)

    }

  render() {
    var totalChecked = this.state.notes.reduce(function(prev, next){
     var addAmount = next.isChecked ? 1 : 0
     prev += addAmount
     return prev
    },0)


    console.log(this.state)
    return (
      <div className="App-container">
        <header className="App-header">
          TO DO LIST
        </header>

        <div className="todos-container">
        <TodoForm
          notes = {this.state.notes}
          note = {this.state.note}
          count = {this.state.count}
          itemsComplete = {this.state.totalChecked}
          itemsLeft = {this.state.itemsLeft}
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
