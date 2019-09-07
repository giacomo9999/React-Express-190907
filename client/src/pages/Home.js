import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container-outer">
        <h1>I Am The Home</h1>
        <Link to={"./list"}>
          <button>My List</button>
        </Link>
      </div>
    );
  }
}

export default Home;
