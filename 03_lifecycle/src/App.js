import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Noidung from './Noidung';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trangthai: "khoitao",
      trangthai2: "khoitao2"
    }
  }
  
  UNSAFE_componentWillMount() {// componentWillMount rename UNSAFE_componentWillMount
    console.log('componentWillMount is running');
  }

  componentDidMount(){
    console.log('Component Did Mount đã chạy', '');
  }
  
  shouldComponentUpdate(nextProps, nextState, nextContext) {
     console.log('shouldComponentUpdate đã chạy', '');
    //  return false;
     return true;
  }

  UNSAFE_componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate đã chạy', '');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate đã chạy', '');
  }
  
  capNhatState = () =>{
    this.setState({
      trangthai: "Trạng thái đã được update",
      trangthai2: "Cập nhật 2"
    });
  }

  render(){
    console.log('Đây là hàm render đã chạy', '');
    console.log(this.state.trangthai, '');
    return (
      <div className="App">
        <button onClick={() => this.capNhatState()}>Click to update State</button>
        <br/>
        <hr/>
        <Noidung ten={this.state.trangthai2}></Noidung>
      </div>
    );
  }
}

export default App;
