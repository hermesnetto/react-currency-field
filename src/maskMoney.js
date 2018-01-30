export default class MaskMoney {
  
  static LOCALES = {
    'pt-BR': {
      charThousands: '.',
      charDecimal: ',',
      symbol: 'R$',
      decimalScale: 2
    },
    'en-US': {
      charThousands: ',',
      charDecimal: '.',
      symbol: 'US$',
      decimalScale: 2
    },
  };

  constructor (locale = 'pt-BR', option = {}) {
    this.option = {
      charThousands: '.',
      charDecimal: ',',
      symbol: 'R$',
      decimalScale: 2
    };
  }

}

const options = {
  charThousands: '.',
  charDecimal: ',',
  symbol: 'R$',
  decimalScale: 2
};

const locale = 'en-US';

const locales = {
  'pt-BR': {
    charThousands: '.',
    charDecimal: ',',
    symbol: 'R$',
    decimalScale: 2
  },
  'en-US': {
    charThousands: ',',
    charDecimal: '.',
    symbol: 'US$',
    decimalScale: 2
  },
};

const isNumber = num => Number(num) === num;

const clearString = (str) => {
  return str.replace(/[\D]+/g, '');
};

export const numberToString = (num) => {
  const numberFormat = isNumber(num) ? clearString(num.toFixed(locales[locale].decimalScale)) : clearString(num);
  const strMoney = `${numberFormat.substr(0, numberFormat.length - locales[locale].decimalScale)}.${numberFormat.substr(locales[locale].decimalScale * (-1))}`;
  let floatValue = strMoney.split('.');
  
  floatValue[0] = floatValue[0].split(/(?=(?:...)*$)/).join(locales[locale].charThousands);
  return `${locales[locale].symbol} ${floatValue.join(locales[locale].charDecimal)}`;
};

export const stringToNumber = (str) => {
  const strFormat = clearString(str);
  return parseFloat(`${strFormat.substr(0, strFormat.length - locales[locale].decimalScale)}.${strFormat.substr(locales[locale].decimalScale * (-1))}`);
};