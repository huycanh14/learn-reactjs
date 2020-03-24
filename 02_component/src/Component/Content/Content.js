import React, { Component } from "react";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: 0
    }
  }
  thongbao = () => {
    alert("Cách xử lý tương tác trong react js");
  };
  thongbao2 = x => {
    alert(x);
  };
  renderButton = () => {
    return (
      <div className="row">
      <div className="btn btn-info" onClick={() => this.editClick()}> Edit </div>
      <div className="btn btn-danger" onClick={() => this.thongbao2("Function có tham số: Array function") } > Remove</div>
    </div>
    )
  };
  renderForm = () =>(
    <div className="row">
      <div className="form-group">
        <input type="text" name="" id="" className="form-control" defaultValue={this.props.tieude}  ref={(dulieunhap) => {
          this.trunggian = dulieunhap
        }} />
        <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
      </div>
    </div>
  );
  checkDisplay = () => {
    if(this.state.trangThai === 0)
      return this.renderButton();
    else return this.renderForm();
  }
  editClick = () => {
    this.setState({
      trangThai: 1 
    });
  }
  saveClick = () => {
    this.setState({
      trangThai: 0 
    });
    console.log(this.trunggian.value);
    // this.props.tieude = this.trunggian.value;
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-lg-6 " + this.props.vtri1}>
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={this.props.anh}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="p-5">
                <h2 className="display-4">{this.props.tieude}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
              {/* <div className="row">
                <div className="btn btn-info" onClick={this.thongbao}>
                  Edit
                </div>
                <div
                  className="btn btn-danger"
                  onClick={() =>
                    this.thongbao2("Function có tham số: Array function")
                  }
                >
                  Remove
                </div>
                <div
                  className="btn btn-danger"
                  onClick={this.thongbao2.bind(
                    this,
                    "Kiểu truyền tham số riêng của react js"
                  )}
                >
                  Remove2
                </div>
              </div> */}
              {this.checkDisplay()}
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}
export default Content;
