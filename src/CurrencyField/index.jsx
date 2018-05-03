// @flow
import * as React from 'react';
import moneyMask from './mask';
import type { Props, Values } from './types';
import { defaultLocale } from './locales';

let mask;

class CurrencyField extends React.Component<Props> {
  static defaultProps = {
    locale: defaultLocale,
    value: 0.0,
  };

  constructor(props: Props) {
    super(props);
    mask = moneyMask(this.props.locale);
  }

  formatValue = (value: string): Values => ({
    floatValue: mask.stringToNumber(value),
    formatedValue: mask.numberToString(value),
  });

  handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    this.props.onChange &&
      this.props.onChange(e, this.formatValue(e.currentTarget.value));
  };

  getInputProps = () => {
    const { value, ...input } = this.props;

    delete input.locale;

    return {
      ...input,
      value: mask.numberToString(value),
      onChange: this.handleChange,
      type: 'text',
    };
  };

  render() {
    return <input {...this.getInputProps()} />;
  }
}

export default CurrencyField;
