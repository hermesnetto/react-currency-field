import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { numberToString, stringToNumber } from './maskMoney';

class CurrencyInput extends Component {
	static propTypes = {
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		name: PropTypes.string,
		onChange: PropTypes.func,
		className: PropTypes.string,
		placeholder: PropTypes.string,
		disabled: PropTypes.bool,
		required: PropTypes.bool,
		style: PropTypes.object,
	};

	formatMoney = value => {
		return {
			floatValue: stringToNumber(value),
			formatedValue: numberToString(value),
		};
	};

	handleChange = e => {
		this.props.onChange &&
			this.props.onChange(e, this.formatMoney(e.target.value));
	};

	getProps = () => {
		const { value, onChange, ...input } = this.props;

		return {
			...input,
			value: numberToString(value),
			onChange: this.handleChange,
			type: 'text',
		};
	};

	render() {
		return <input {...this.getProps()} />;
	}
}

export default CurrencyInput;
