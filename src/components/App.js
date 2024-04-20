import React from 'react';
import '../styles/App.css';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  handleOptionChange = (option) => {
    this.setState({ selectedOption: option });
  }

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <div className="child1">
            <h2>Child Component 1</h2>
            <ChildComponent1 onOptionChange={this.handleOptionChange} />
        </div>
        <div  className="child2">
            <h2>Child Component 2</h2>
            <ChildComponent2 onOptionChange={this.handleOptionChange} />
        </div>
        <p>Selected Option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default App;

