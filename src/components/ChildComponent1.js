import React from 'react';

class ChildComponent1 extends React.Component {
  render() {
    return (
      <button id="btn1" onClick={() => this.props.onOptionChange('Option 1')}>
        Option 1
      </button>
    );
  }
}

export default ChildComponent1;