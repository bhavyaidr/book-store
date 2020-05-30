import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1>Github Link for Project</h1>
            <a href="https://github.com/bhavya121999/book-store">
              <h1>Github</h1>
            </a>
            <h2>Created by Bhavya Gupta</h2>
          </div>
        </div>
      </div>
    );
  }
}
