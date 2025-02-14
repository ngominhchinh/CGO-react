import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.item !== '') {
      const newList = [...this.state.list, this.state.item];
      this.setState({ list: newList, item: '' });
    }
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;