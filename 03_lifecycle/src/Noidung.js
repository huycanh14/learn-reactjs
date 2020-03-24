import React, { Component } from 'react';

class Noidung extends Component {

    UNSAFE_componentWillReceiveProps (nextProps, nextState) {
        console.log('UNSAFE_componentWillReceiveProps đã chạy', 'props ' + nextProps.ten);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate đã chạy', 'props');
        //  return false;
        return true;
    }

    UNSAFE_componentWillUpdate (nextProps, nextState) {
        console.log('componentWillUpdate đã chạy', 'props');
      }
      
      componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate đã chạy', 'props');
      }
    
    

    render() {
        return (
            <div>
                <h3>Xin chào {this.props.ten}</h3>
            </div>
        );
    }
}

export default Noidung;