import React, { Component } from 'react';
import { render } from 'react-dom';
import CurrencyInput from './CurrencyInput';

const styles = {
	width: 600,
	margin: '0 auto',
};

class App extends Component {
	render() {
		return (
			<div style={styles}>
				<CurrencyInput />
			</div>
		);
	}
}

render(<App />, document.querySelector('#root'));
