import React, { Component } from "react";
import { Link } from "react-router-dom";

class OtherPage extends Component {
  render() {
    return (
      <div>
        <p>In some other page!</p>
        <Link to="/">Go back home</Link>
      </div>
    );
  }
}

export default OtherPage;
