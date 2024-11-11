import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <img
        alt="Ashutosh is Analysing Data"
        src={require("../../assets/images/SF.jpg")}
      ></img>
    );
  }
}
