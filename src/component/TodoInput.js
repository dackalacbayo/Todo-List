import React, { Component } from 'react'
import '../App.css'


class TodoInput extends Component {


  render() {
    const {details, notes} = this.props
    console.log('pokenote', notes)
    const noteList = notes
    .filter((note) => details.id === note.id )
    .map((msg) => <li className="noteList">{msg.note}</li>)

return (
        <div >

             <textarea className="" placeholder="Type here..."
              onChange={this.props.handleChange} value={this.props.note}/>
          	 <button className="btn-save" type="submit" value="Search"
              onClick={this.props.handleSave}>Save</button>

              <div className="noteList">
                {noteList}
              </div>
        </div>
    );
  }
};

export default TodoInput;
