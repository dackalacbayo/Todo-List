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
    isChecked: true
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
      console.log(this.state.id)
        this.setState({
          count: this.state.count - 1
        })

        if (this.state.count == 0){
          return this.state.count
        }

        const deleteItem = this.state.notes
        if(deleteItem.indexOf(item) > - 1){
          deleteItem.splice(deleteItem.indexOf(item), 1)
          this.setState({notes: deleteItem})
        }
      }

    handleDone(data){
      console.log('isChecked??:',this.state.isChecked)


      if (this.state.count == 0){
        return this.state.count
      }

      const isChecked = this.state.isChecked

        var newList = this.state.notes
        .map(item => {
          const isSelected = item.id === data.id
          if (isSelected){ item.isChecked = !item.isChecked
            return item
          }
        })

        this.setState({
          count: this.state.count - 1,
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
