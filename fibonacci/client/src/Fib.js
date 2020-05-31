import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ""
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  };

  fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  };

  renderSeenIndexes = () =>
    this.state.seenIndexes.map(({ number }) => number.join(", "));

  renderValues = () =>
    Object.keys(this.state.values).map(key => (
      <div key={key}>
        For index {key} I Calculated {this.state.values[key]}
      </div>
    ));

  onInputChange = ({ target: { value: index } }) => this.setState({ index });

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index
    });
    this.setState({ index: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Enter your index:</label>
          <input
            type="text"
            value={this.state.index}
            onChange={this.onInputChange.bind(this)}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
