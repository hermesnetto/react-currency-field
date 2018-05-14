import { defaultLocale, locales } from './locales';

const mask = locale => {
  let options = locales[defaultLocale];

  if (typeof locale === 'string' && locales.hasOwnProperty(locale)) {
    options = locales[locale];
  } else if (typeof locale === 'object') {
    options = locale;
  }

  const defaultValue = (0.0).toFixed(options.decimalScale);

  const isNumber = num => Number(num) === num;

  const negativeNumber = value =>
    isNumber(value)
      ? value < 0
      : !!(
          (
            value
              .replace(new RegExp(`[R$]+`, `g`), ``)
              .match(/^[\s]*-{1}|[?=.*-]$/g) || []
          ).length % 2
        );

  const transformNumber = str =>
    `${str.substr(0, str.length - options.decimalScale) || `0`}.${str.substr(
      options.decimalScale * -1
    )}`;

  const transformStr = str =>
    Number(str)
      ? Number(str) / Math.pow(10, options.decimalScale)
      : Number(defaultValue);

  const onlyNumbers = str =>
    transformStr(str.replace(/[\D]+/g, ``))
      .toFixed(options.decimalScale)
      .replace(/[\D]+/g, ``);

  return {
    numberToString: num => {
      const signal = negativeNumber(num) ? `-` : ``;

      const number = onlyNumbers(
        isNumber(num) ? num.toFixed(options.decimalScale) : num
      );

      const formatNumber = transformNumber(number).split('.');
      formatNumber[0] = formatNumber[0]
        .split(/(?=(?:...)*$)/)
        .join(options.charThousands);

      return `${options.symbol} ${signal}${formatNumber.join(
        options.charDecimal
      )}`;
    },

    stringToNumber: str => {
      const negative = negativeNumber(str) ? -1 : 1;

      return Number(transformNumber(onlyNumbers(str))) * negative;
    },
  };
};

export default mask;
