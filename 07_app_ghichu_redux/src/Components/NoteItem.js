import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    twoActionButton = () => {
        this.props.changeEditStatus();
        //hàm lấy nội dung truyền trong store, để store update dữ liệu
        // console.log(this.props.note);
        this.props.getEitData(this.props.note);
        
    }

    deleteData = () => {
        this.props.getDeleteData(this.props.note.id);
    }
    
    render() {
        return (
            <div className="card">
              <div className="card-header" role="tab" id="section1HeaderId">
                <h5 className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#noteList"
                    href={"#number" +this.props.id}
                    aria-expanded="true"
                    aria-controls="noteContent1"
                  >
                    {this.props.noteTitle}
                  </a>
                  <div className="btn-group float-right">
                      <button className="btn btn-outline-info"  onClick={() => this.twoActionButton()}>Sửa</button>
                      <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}>Xóa</button>
                  </div>
                </h5>
              </div>
              <div
                id={"number" +this.props.id}
                className="collapse in"
                role="tabpanel"
                aria-labelledby="section1HeaderId"
              >
                <div className="card-body">
                {this.props.noteContent}
                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        
        getEitData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },

        getDeleteData: (deleteId) => {
            dispatch({
                type: "DELETE",
                deleteId
            })
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);