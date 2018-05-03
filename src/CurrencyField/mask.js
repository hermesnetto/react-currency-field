import { defaultLocale, locales } from './locales';

const mask = locale => {
  let options = locales[defaultLocale];

  if (typeof locale === 'string' && locales.hasOwnProperty(locale)) {
    options = locales[locale];
  } else if (typeof locale === 'object') {
    options = locale;
  }

  const initValue = (0.0).toFixed(options.decimalScale);

  const isNumber = num => Number(num) === num;

  const isValidStr = str => str.length >= options.decimalScale;

  const joinString = str =>
    `${str.substr(0, str.length - options.decimalScale)}.${str.substr(
      options.decimalScale * -1
    )}`;

  const transformStr = str =>
    parseInt(str)
      ? parseInt(str) / Math.pow(10, options.decimalScale)
      : parseFloat(initValue);

  const clearString = str => {
    const onlyNumbers = str.replace(/[\D]+/g, '');

    if (!isValidStr(onlyNumbers) && transformStr(onlyNumbers)) {
      return clearString(transformStr(onlyNumbers).toString());
    }
    return !!onlyNumbers ? onlyNumbers : clearString(initValue);
  };

  return {
    numberToString: num => {
      const number = clearString(
        isNumber(num) ? num.toFixed(options.decimalScale) : num
      );

      const formatNumber = joinString(number).split('.');
      formatNumber[0] = formatNumber[0]
        .split(/(?=(?:...)*$)/)
        .join(options.charThousands);

      return `${options.symbol} ${formatNumber.join(options.charDecimal)}`;
    },

    stringToNumber: str => parseFloat(joinString(clearString(str))),
  };
};

export default mask;
