import React, { Component } from 'react'
import '../App.css'


class TodoForm extends Component {


  render() {
    const {notes,count,countdone} = this.props
    console.log('Notesss', notes)
    const todoList = notes
    .map((msg) =>
      <div className="noteList">{msg.note}
          <br /><div className="buttons">
            <button className="btn-done"
              onClick={this.props.handleDone.bind(this,msg)}>DONE</button>
            <button className="btn-delete"
              onClick={this.props.handleDelete}>REMOVE</button>
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
                  <th>ITEMS LEFT</th>
                  <th>ITEMS DONE</th>
                </tr>
                <tr>
                  <td>{count}</td>
                  <td>{countdone}</td>
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
