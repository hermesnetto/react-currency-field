## React Currency Input

⚛️ A small and simple component to currency in react.

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
| value | number | 0 | - |
| onChange | function |  | - |
| locale | string | en-US | - |


---------------------------------

#### Contributions are welcome!