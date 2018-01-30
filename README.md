## React Currency Input

⚛️ 📄 🚀 A smaller and simple component to currency in react.

---------------------------------

## How to install
```
yarn add currency-react-input
```

---------------------------------

## How to use
```
  import CurrencyInput from 'currency-react-input';

  <CurrencyInput
    locale="en-US"
    value={this.state.value}
    onChange={(event, values) => {
      this.setState({
        value: values.floatValue
      });
    }}
  />
```

---------------------------------

## Props
| Prop | Type | Default | Description |
|-----:|:----:|:----:|:----|
| value | number | 0 | - |
| onChange | function |  | - |
| locale | string | 'en-US' | - |


---------------------------------

Contribution are welcome