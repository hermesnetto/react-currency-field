import React, { Component } from 'react';
import CurrencyInput from '../CurrencyInput';

const styles = {
	width: 600,
	margin: '0 auto',
};

class Example extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 23.8,
		};
	}

	render() {
		return (
			<div style={styles}>
				<CurrencyInput
					locale="pt-BR"
					value={this.state.value}
					onChange={(e, values) => {
						this.setState({ value: values.floatValue });
					}}
				/>
			</div>
		);
	}
}

export default Example;
