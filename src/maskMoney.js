const inputValue = 223.4;
const locale = 'pt-BR';
const option = null;

// ------------------------------------------------------ // 

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

const options = {
  charThousands: '.',
  charDecimal: ',',
  symbol: 'R$',
  decimalScale: 2
};

const stringToNumber = (str) => {
  const strValue = str.replace(/[^0-9,.]+/g, '');
  
  if (locales[locale].charDecimal === ',') {
      return parseFloat(strValue.replace(',', '.').replace('.', ''));
  }
  return parseFloat(strValue.replace(',', ''));
};

const numberToString = (num) => {
  let floatValue = num.toFixed(locales[locale].decimalScale).split('.');
  
  floatValue[0] = floatValue[0].split(/(?=(?:...)*$)/).join(locales[locale].charThousands);
  return floatValue.join(locales[locale].charDecimal);
};