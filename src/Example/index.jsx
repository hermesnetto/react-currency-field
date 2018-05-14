import React, { Component } from 'react';
import CurrencyInput from '../CurrencyField';

const styles = {
  width: 600,
  margin: '0 auto',
};

const input = {
  height: 40,
  padding: '0 15px',
  fontSize: 16,
  width: 300,
};

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: -22.35,
    };
  }

  render() {
    return (
      <div style={styles}>
        <CurrencyInput
          locale="en-US"
          value={this.state.value}
          onChange={(e, values) => {
            this.setState({ value: values.floatValue });
          }}
          style={input}
        />
      </div>
    );
  }
}

export default Example;
