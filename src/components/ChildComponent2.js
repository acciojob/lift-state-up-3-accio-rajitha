import React from 'react';

class ChildComponent2 extends React.Component {
  render() {
    return (
      <button id="btn2" onClick={() => this.props.onOptionChange('Option 2')}>
        Option 2
      </button>
    );
  }
}

export default ChildComponent2;