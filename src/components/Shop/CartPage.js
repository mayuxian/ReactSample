import React from 'react';
import GoodStore from './GoodStore';
import { Cart } from './Cart';
import { Shop } from './Shop';

export default class CartPage extends React.Component {
  constructor() {
    super();
    this.goods = GoodStore.getGoods();
    this.state = {
      shop: [...this.goods],
      cart: [...this.goods]
    }
  }
  addGoodToShop = good => {
    let newGoods = [...this.state.shop];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    newGoods.splice(index, 1, { ...preGood, count: (preGood.count || 0) + 1 });

    this.setState({ shop: newGoods });
  };
  addGoodToCart = good => {
    let newGoods = [...this.state.cart];
    if (newGoods.length <= 0) {
      newGoods.push({ ...good, count: 1 });
    } else {
      const index = newGoods.findIndex(g => g.id === good.id);
      const preGood = newGoods[index];
      newGoods.splice(index, 1, { ...preGood, count: (preGood.count || 0) + 1 });
    }
    this.setState({ cart: newGoods });
  };
  minusFromCart = good => {
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
  minusFromShop = good => {
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
  };
  render() {
    return (
      <div>
        <Shop goods={this.state.shop} addGood={good => { this.addGoodToCart(good) }} minusGood={good => { this.minusFromCart(good) }}></Shop>
        <Cart goods={this.state.cart} addGood={good => { this.addGoodToShop(good) }} minusGood={good => { this.minusFromShop(good) }}></Cart>
      </div>
    );
  }
}