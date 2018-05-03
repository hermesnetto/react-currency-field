## React Currency Field

A simple and small component to handle currency in react.

## How to install
```
yarn add react-currency-field
```

## How to use
```javascript
  import ReactCurrencyInput from 'react-currency-field';

  <ReactCurrencyInput
    locale="en-US"
    value={this.state.value}
    onChange={(event, values) => {
      this.setState({
        value: values.floatValue
      });
    }}
  />
```

## Props
| Prop | Type | Default | Description |
|-----:|:----:|:----:|:----|
| value | number | 0.0 | - |
| onChange | function(event, value: { formatedValue, floatValue }) |  | - |
| locale | string or object | en-US | a string (pt-BR or en-US) or a config object |

## Locale Config
```javascript
  {
    charThousands: ',',
    charDecimal: '.',
    symbol: '$',
    decimalScale: 2,
  }
```


---------------------------------

#### Contributions are welcome!
