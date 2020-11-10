import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className="badge m-2 badge-warning">{this.state.count}</span>
        <button
          onClick={() => this.handleIncrement({id:1})}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
