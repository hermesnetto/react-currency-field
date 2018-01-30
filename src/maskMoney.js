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

  OPTION;

  constructor (locale = 'pt-BR', option = {}) {
    
  }

}

const options = {
  charThousands: '.',
  charDecimal: ',',
  symbol: 'R$',
  decimalScale: 2
};

const stringToNumber = (str) => {
  return str.replace(/[\D]+/g, '');
};

const numberToString = (num) => {
  const floatNumber = `${num.substr(0, num.length - locales[locale].decimalScale)}.${num.substr(locales[locale].decimalScale * (-1))}`;
  let floatValue = floatNumber.split('.');
  
  floatValue[0] = floatValue[0].split(/(?=(?:...)*$)/).join(locales[locale].charThousands);
  return floatValue.join(locales[locale].charDecimal);
};