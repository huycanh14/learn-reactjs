import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

    // useEditStatusInStore = () => {
    //     let {dispatch} = this.props;
    //     dispatch({type: 'CHANGE_EDIT_STATUS'})
    // }

    render() {
        return (
            <div>
                Đây là component New
                <button type="submit" onClick={() => {
                    this.useEditStatusInStore()
                }}>Click here</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({type: 'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);