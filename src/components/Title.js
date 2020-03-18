import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">{this.props.data}</h1>
      </div>
    );
  }
}

export default Title;
