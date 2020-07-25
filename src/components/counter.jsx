import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, PrevState) {
    // console.log("previous props: " + prevProps);
    //console.log("previous state: " + PrevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      //console.log("previous props counter value: " + prevProps.counter.value);
      //  console.log("new props counter value: " + this.props.counter.value);
      // logic for trigger request
      // ajax request here
    }
  }

  componentWillUnmount() {
    console.log("Counter - unmounted");
  }

  componentDidMount() {
    // call Ajax calls here
    console.log("Counter - mount");
  }

  render() {
    console.log("Counter - render");
    return (
      <div>
        {/* {this.props.id} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
