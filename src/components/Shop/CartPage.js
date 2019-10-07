import React from 'react';
import GoodStore from './GoodStore';
import { Good } from './Good';
// import { Cart } from './Cart';
// import { Shop } from './Shop';

export default class CartPage extends React.Component {
  constructor() {
    super();
    this.goods = GoodStore.getGoods();
    this.state = {
      shop: [...this.goods],
      cart: []
    }
  }
  addGoodToShop = good => {
    console.log(`Shop.add:${JSON.stringify(good)}`);
    const newGoods = [...this.state.shop];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    const newGood = { ...preGood, count: (preGood.count || 0) + 1 };
    newGoods.splice(index, 1, newGood);

    this.setState({ shop: newGoods });
    this.addGoodToCart(good);
  };
  minusGoodFromShop = good => {
    if (good.count === 0) {
      return;
    }
    console.log(`Shop.minus:${good}`);
    const newGoods = [...this.state.shop];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    const newGood = { ...preGood, count: preGood.count - 1 };
    newGoods.splice(index, 1, newGood);

    this.setState({ shop: newGoods });
    this.minusGoodFromCart(good);
  };

  addGoodToCart = good => {
    console.log(`Shop.add:${JSON.stringify(good)}`);
    const newGoods = [...this.state.cart];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];

    if (newGoods.length <= 0 || !preGood) {
      newGoods.push({ ...good, count: 1 });
    }
    else {
      const newGood = { ...preGood, count: (preGood.count || 0) + 1 };
      newGoods.splice(index, 1, newGood);
    }

    this.setState({ cart: newGoods });
  };
  minusGoodFromCart = good => {
    console.log(`Shop.minus:${good}`);
    const newGoods = [...this.state.cart];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    if (preGood.count === 1) {
      newGoods.splice(index, 1);
    } else {
      const newGood = { ...preGood, count: preGood.count - 1 };
      newGoods.splice(index, 1, newGood);
    }

    this.setState({ cart: newGoods });
  };
  render() {
    return (
      <div>
        {/* <Shop goods={this.state.shop} addGood={good => this.addGoodToShop(good)} minusGood={good => this.minusGoodFromShop(good)}></Shop>
        <Cart goods={this.state.cart} addGood={this.addGoodToCart} minusGood={this.minusGoodFromCart}></Cart> */}
        {/* 列表渲染 */}
        <ul>
          {
            this.state.shop.map(good => (
              <tr key={good.id}>
                <td>
                  <Good id={good.id} name={good.name} price={good.price} description={good.description}></Good>
                </td>
                <td>
                  <button onClick={() => this.minusGoodFromShop(good)}>-</button>
                  &nbsp; {good.count || "0"} &nbsp;
                    <button onClick={() => this.addGoodToShop(good)}> +</button>
                </td>
              </tr>
            ))
          }
        </ul>

        {/* 购物车 */}
        <Cart goods={this.state.cart} minus={this.minusGoodFromCart} add={this.addGoodToCart} />
      </div>
    );
  }
}

function Cart({ goods, minus, add }) {
  return (
    <table>
      <tbody>
        {
          goods.map(good => (
            <tr key={good.id}>
              <td>
                <Good id={good.id} name={good.name} price={good.price * good.count}></Good>
              </td>
              <td>
                <button onClick={minus}>-</button>
                &nbsp; {good.count || "0"} &nbsp;
                    <button onClick={add}> +</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
