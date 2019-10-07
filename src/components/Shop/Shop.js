import React from 'react';
import { Good } from './Good';
import PropTypes from 'prop-types'

class Shop extends React.Component {

  static propTypes = {
    addGood: PropTypes.func.isRequired,
    minusGood: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      goods: props.goods
    }
  }
  add = good => {
    console.log(`Shop.add:${JSON.stringify(good)}`);
    const newGoods = [...this.state.goods];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    const newGood = { ...preGood, count: (preGood.count || 0) + 1 };
    newGoods.splice(index, 1, newGood);

    this.setState({ goods: newGoods });

    this.props.addGood && this.props.addGood(newGood);
  };
  minus = good => {
    if (good.count === 0) {
      return;
    }
    console.log(`Shop.minus:${good}`);
    const newGoods = [...this.state.goods];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    const newGood = { ...preGood, count: preGood.count - 1 };
    newGoods.splice(index, 1, newGood);

    this.setState({ goods: newGoods });
    this.props.minusGood && this.props.minusGood(newGood);
  };
  render() {
    return (
      <>
        <table>
          <tbody>
            {
              this.state.goods.map(good => (
                <tr key={good.id}>
                  <td>
                    <Good id={good.id} name={good.name} price={good.price} description={good.description}></Good>
                  </td>
                  <td>
                    <button onClick={() => this.minus(good)}>-</button>
                    &nbsp; {good.count || "0"} &nbsp;
                    <button onClick={() => this.add(good)}> +</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
    )
  }
}

export { Shop };