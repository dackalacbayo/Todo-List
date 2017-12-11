import React, { Component } from 'react'
import '../App.css'


class TodoForm extends Component {

  render() {
    const {notes,count} = this.props
    console.log('Notesss', notes)
    const todoList = notes
    .map((msg) =>
      <div className="noteList">
        <input className="checkboxDone" type="checkbox" checked={msg.isChecked}
          onClick={this.props.handleDone.bind(this,msg)} />
         <label className="chkLabel" style={{textDecorationLine: msg.isChecked ? 'line-through' : 'none' ,
            color: msg.isChecked ? 'white' : 'white'}}>{msg.note}</label>
            <br /><div className="buttons">
          <button className="btn-delete"
            onClick={this.props.handleDelete.bind(this,msg)}>
              REMOVE</button>
          </div>
        </div>)




return (
        <div className="todoForm-container">

             <input className="todolist-input" placeholder="Type here..."
              onChange={this.props.handleChange} value={this.props.note}/>
          	 <button className="btn-save" type="submit" value="Search"
              onClick={this.props.handleSave} disabled={!this.props.note}>SAVE</button>

              <table>
                <tr>
                  <th>{count} items left</th>
                </tr>
              </table>

              <div className="notes">
                {todoList}
              </div>


        </div>
    );
  }
};

export default TodoForm;
