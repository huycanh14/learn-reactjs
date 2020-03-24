import React, { Component } from "react";

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: ""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        })
    }

    addDate = (title, content) => {
        let item = {};
        item.noteTitle  = title;
        item.noteContent = content;
        this.props.getData(item);
    }

  render() {
    return (
      <div className="col-4">
        <h3>Sửa nội dung note</h3>
        <form>
            <div className="form-group">
            <label htmlFor="noteTitle">Tên tiêu đề note</label>
            <input
                type="text"
                className="form-control"
                name="noteTitle"
                id="noteTitle"
                aria-describedby="helpIdNoteTitle"
                placeholder="Tiêu đề note"
                onChange={(event) => {
                    this.isChange(event)
                }}
            />
            <small id="helpIdNoteTitle" className="form-text text-muted">
                Điền tiêu dề vào đây
            </small>
            </div>
            <div className="form-group">
            <label htmlFor="noteContent">Tên nội dung note</label>
            <textarea
                type="text"
                className="form-control"
                name="noteContent"
                id="noteContent"
                aria-describedby="helpIdNoteContent"
                placeholder="Tiêu đề note"
                defaultValue={""}
                onChange={(event) => {
                    this.isChange(event)
                }}
            />
            <small id="helpIdNoteContent" className="form-text text-muted">
                Điền nội dung vào đây
            </small>
            </div>
            <button type="reset" onClick={() => this.addDate(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary form-control">
            Lưu
            </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
