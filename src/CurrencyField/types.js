// @flow
import * as React from 'react';

export type Mask = {
  numberToString: (num: string | number) => string,
  stringToNumber: (str: string) => number,
};

export type Values = {
  floatValue: number,
  formatedValue: string,
};

export type Locales = 'pt-BR' | 'en-US';

export type LocaleConfig = {
  charThousands: string,
  charDecimal: string,
  symbol: string,
  decimalScale: number,
};

export type Props = {
  value: string | number,
  name?: string,
  onChange?: (e: SyntheticEvent<HTMLInputElement>, values: Values) => void,
  onFocus?: (e: SyntheticEvent<HTMLInputElement>) => void,
  onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void,
  className?: string,
  placeholder?: string,
  disabled?: boolean,
  required?: boolean,
  style?: { [string]: string | number },
  locale: Locales | LocaleConfig,
};
