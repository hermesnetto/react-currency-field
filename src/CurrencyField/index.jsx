// @flow
import * as React from 'react';
import moneyMask from './mask';
import type { Props, Values, Mask } from './types';
import { defaultLocale } from './locales';

class CurrencyField extends React.Component<Props> {
  static defaultProps = {
    locale: defaultLocale,
    value: 0.0,
  };

  constructor(props: Props) {
    super(props);
    this.mask = moneyMask(this.props.locale);
  }

  mask: Mask;

  formatValue = (value: string): Values => ({
    floatValue: this.mask.stringToNumber(value),
    formatedValue: this.mask.numberToString(value),
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
      value: this.mask.numberToString(value),
      onChange: this.handleChange,
      type: 'text',
    };
  };

  render() {
    return <input {...this.getInputProps()} />;
  }
}

export default CurrencyField;
