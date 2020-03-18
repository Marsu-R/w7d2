import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div>
        <h3> {this.props.data}</h3>
      </div>
    );
  }
}

export default Description;
