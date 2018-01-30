import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencyInput extends Component {
	static propTypes = {
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		name: PropTypes.string,
		onChange: PropTypes.func,
	};

	formatPrice = value => {
		return {
			floatValue: 0,
			formatedValue: '',
		};
	};

	handleChange = e => {
		const { onChange } = this.props;
		onChange && onChange(e, this.formatPrice(e.target.value));
	};

	getProps = () => {
		const { props } = this;

		return {
			value: props.value,
			onChange: this.handleChange,
			type: 'text',
		};
	};

	render() {
		return <input {...this.getProps()} />;
	}
}

export default CurrencyInput;
