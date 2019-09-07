import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  state = { list: [] };

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("/api/getList")
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };

  render() {
    const { list } = this.state;
    console.log("List:", list);
    return (
      <div className="container-outer">
        <h1>I Am The List</h1>
        {list.length > 0 ? (
          <div className="container-inner">
            {list.map((item, index) => (
              <div key={index}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="container-inner">
            <h2>No List Items Found</h2>
          </div>
        )}
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default List;
