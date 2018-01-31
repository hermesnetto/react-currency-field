import React, { Component } from 'react';
import PropTypes from 'prop-types';
import maskMoney from './maskMoney';

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
		locale: PropTypes.string,
		options: PropTypes.shape({
			charThousands: PropTypes.string,
			charDecimal: PropTypes.string,
			symbol: PropTypes.string,
			decimalScale: PropTypes.number,
		}),
	};

	static defaultProps = {
		locale: 'en-US',
	};

	mask = maskMoney(this.props.locale, this.props.options);

	formatMoney = value => {
		return {
			floatValue: this.mask.stringToNumber(value),
			formatedValue: this.mask.numberToString(value),
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
			value: this.mask.numberToString(value),
			onChange: this.handleChange,
			type: 'text',
		};
	};

	render() {
		return <input {...this.getProps()} />;
	}
}

export default CurrencyInput;
