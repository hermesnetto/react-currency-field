import * as React from 'react';
import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrencyField from '../CurrencyField';

enzyme.configure({ adapter: new Adapter() });

const props = {
  value: 0.0,
};

const customLocale = {
  charThousands: '-',
  charDecimal: '_',
  symbol: '#',
  decimalScale: 2,
};

const simulate = (value, expected, locale = 'en-US') => {
  let formated = 0;

  mount(
    <CurrencyField
      locale={locale}
      value={value}
      onChange={(e, v) => {
        formated = v.formatedValue;
      }}
    />
  ).simulate('change');

  expect(formated).toEqual(expected);
};

describe('Currency Field Tests', () => {
  describe('Default Tests', () => {
    it('should render a default Currency Field', () => {
      ReactDOM.render(
        <CurrencyField {...props} />,
        document.createElement('div')
      );
    });

    it('should match the default snapshot', () => {
      const field = renderer.create(<CurrencyField {...props} />);
      expect(field.toJSON()).toMatchSnapshot();
    });

    it('should has a locale `en-US` by default', () => {
      const field = mount(<CurrencyField {...props} />);
      expect(field.prop('locale')).toEqual('en-US');
    });

    it('should set locale as `pt-BR`', () => {
      const field = mount(<CurrencyField {...props} locale="pt-BR" />);
      expect(field.prop('locale')).toEqual('pt-BR');
    });

    it('should only allow type numbers', () => {
      simulate('money', '$ 0.00');
    });

    it('should has all passed props', () => {
      const field = mount(
        <CurrencyField
          value={10.5}
          className="my-class"
          id="my-id"
          required
          disabled
        />
      );
      const p = field.find('input').props();

      expect(p.value).toEqual('$ 10.50');
      expect(p.className).toEqual('my-class');
      expect(p.id).toEqual('my-id');
      expect(p.required).toEqual(true);
      expect(p.disabled).toEqual(true);
    });
  });

  describe('Tests of the mask in `en-US`', () => {
    it('Type `22.3` and expect the value to be `$ 22.30`', () => {
      simulate(22.3, '$ 22.30');
    });

    it('Type `2456.1` and expect the value to be `$ 2,456.10`', () => {
      simulate(2456.1, '$ 2,456.10');
    });

    it('Type `12` and expect the value to be `$ 12.00`', () => {
      simulate(12, '$ 12.00');
    });

    it('Type `$ 123.33` and expect the value to be `$ 123.33`', () => {
      simulate('$ 123.33', '$ 123.33');
    });

    it('Type `R$ 123,33` and expect the value to be `$ 123.33`', () => {
      simulate('R$ 123,33', '$ 123.33');
    });
  });

  describe('Tests of the mask in `pt-BR`', () => {
    it('Type `22.3` and expect the value to be `R$ 22,30`', () => {
      simulate(22.3, 'R$ 22,30', 'pt-BR');
    });

    it('Type `2456.1` and expect the value to be `R$ 2.456,10`', () => {
      simulate(2456.1, 'R$ 2.456,10', 'pt-BR');
    });

    it('Type `12` and expect the value to be `R$ 12,00`', () => {
      simulate(12, 'R$ 12,00', 'pt-BR');
    });

    it('Type `$ 123.33` and expect the value to be `R$ 123,33`', () => {
      simulate('$ 123.33', 'R$ 123,33', 'pt-BR');
    });

    it('Type `$ 123.33` and expect the value to be `R$ 123,33`', () => {
      simulate('$ 123.33', 'R$ 123,33', 'pt-BR');
    });
  });

  describe('Tests of the mask with a custom locale config', () => {
    it('Type `22.3` and expect the value to be `# 22_30`', () => {
      simulate(22.3, '# 22_30', customLocale);
    });

    it('Type `2456.1` and expect the value to be `# 2-456_10`', () => {
      simulate(2456.1, '# 2-456_10', customLocale);
    });
  });

  describe('Tests of the mask with a custom locale config', () => {
    it('Type `22.3` and expect the value to be `# 22_30`', () => {
      simulate(22.3, '# 22_30', customLocale);
    });

    it('Type `2456.1` and expect the value to be `# 2-456_10`', () => {
      simulate(2456.1, '# 2-456_10', customLocale);
    });
  });

  describe('Tests of the mask passing a string', () => {
    it('Type `$ 12,455.30` and expect the value to be `$ 12,455.30`', () => {
      simulate('$ 12,455.30', '$ 12,455.30');
    });

    it('Type `12455.30` and expect the value to be `$ 12,455.30`', () => {
      simulate('12455.30', '$ 12,455.30');
    });

    it('Type `125.51` and expect the value to be `$ 125.51`', () => {
      simulate('125.51', '$ 125.51');
    });

    it('Type `40` and expect the value to be `$ 40.00`', () => {
      simulate('40', '$ 40.00');
    });

    it('Type `0.05` and expect the value to be `$ 00.05`', () => {
      simulate('0.05', '$ 0.05');
    });

    it('Type `8` and expect the value to be `$ 8.00`', () => {
      simulate('8', '$ 8.00');
    });
  });
});
