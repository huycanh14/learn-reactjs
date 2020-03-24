import React, { Component } from "react";
import { connect } from 'react-redux';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: "",
            id: ""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addDate = (title, content) => {
        if(this.state.id){ //edit case
            let editOpject = {};
            editOpject.id = this.state.id;
            editOpject.noteContent = this.state.noteContent;
            editOpject.noteTitle = this.state.noteTitle;
            this.props.editDataStore(editOpject);
            this.props.changeEditStatus();
        } else {
            let item = {};
            item.noteTitle  = title;
            item.noteContent = content;
            // item = JSON.stringify(item);
            this.props.addDataStore(item); //sủ dụng reducer trong store; //displatch ADD_DATA
        }
        
    }
    UNSAFE_componentWillMount () {
        if(this.props.editItem){//edit case
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            })
        }
    }

  render() {
    // console.log(this.props.editItem)
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
                defaultValue={this.props.editItem.noteTitle}
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
                defaultValue={this.props.editItem.noteContent}
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

// props.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}
//this.props.testThoi

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (nhanvao) => {
            dispatch({type: "ADD_DATA", nhanvao})
        },
        
        editDataStore: (nhanvao) => {
            dispatch({type: "EDIT", nhanvao})
        },

        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
    }
}
//this.props.addDataSore
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
