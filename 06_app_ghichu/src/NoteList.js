import React, { Component } from "react";

class NoteList extends Component {
  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          <div className="card">
            <div className="card">
              <div className="card-header" role="tab" id="section1HeaderId">
                <h5 className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#noteList"
                    href="#noteContent1"
                    aria-expanded="true"
                    aria-controls="noteContent1"
                  >
                    Ghi chú ngày 29/02/2020
                  </a>
                </h5>
              </div>
              <div
                id="noteContent1"
                className="collapse in"
                role="tabpanel"
                aria-labelledby="section1HeaderId"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore magnam ut incidunt dicta iste esse unde minus placeat
                  aperiam modi quaerat quae voluptatem deserunt velit debitis,
                  ratione obcaecati ipsa officiis!
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" role="tab" id="section1HeaderId">
                <h5 className="mb-0">
                  <a
                    data-toggle="collapse"
                    data-parent="#noteList"
                    href="#noteContent2"
                    aria-expanded="true"
                    aria-controls="noteContent2"
                  >
                    Ghi chú ngày 03/03/2020
                  </a>
                </h5>
              </div>
              <div
                id="noteContent2"
                className="collapse in"
                role="tabpanel"
                aria-labelledby="section1HeaderId"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore magnam ut incidunt dicta iste esse unde minus placeat
                  aperiam modi quaerat quae voluptatem deserunt velit debitis,
                  ratione obcaecati ipsa officiis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
