
const isNumber = num => Number(num) === num;

const clearString = (str) => {
  const onlyNumbers = str.replace(/[\D]+/g, '');
  
  return onlyNumbers === '' ? clearString((0.0).toFixed(options.decimalScale)) : onlyNumbers;
}

export const maskMoney = (locale = 'pt-BR', option) => {
  
  const localesDefault = {
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
    ...localesDefault[locale],
    ...option
  };

  return {
    numberToString = (num) => {
      const numberFormat = isNumber(num) ? clearString(num.toFixed(options.decimalScale)) : clearString(num);
      const strMoney = `${numberFormat.substr(0, numberFormat.length - options.decimalScale)}.${numberFormat.substr(options.decimalScale * (-1))}`;
      let floatValue = strMoney.split('.');
      
      floatValue[0] = floatValue[0].split(/(?=(?:...)*$)/).join(options.charThousands);
      return `${options.symbol} ${floatValue.join(options.charDecimal)}`;
    },

    stringToNumber = (str) => {
      const strFormat = clearString(str);
      return parseFloat(`${strFormat.substr(0, strFormat.length - options.decimalScale)}.${strFormat.substr(options.decimalScale * (-1))}`);
    }
  };
}