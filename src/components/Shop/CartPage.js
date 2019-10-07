import React from 'react';
import GoodStore from './GoodStore';
import { Cart } from './Cart';
import { Shop } from './Shop';

export default class CartPage extends React.Component {
  constructor() {
    super();
    this.goods = GoodStore.getGoods();
    this.regionTypes = {
      shop: 0,
      cart: 1
    };
    this.handleRegion = null;
    this.state = {
      shop: [...this.goods],
      cart: []
    }
  }
  addGoodToShop = good => {
    const newGoods = [...this.state.shop];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    const newGood = { ...preGood, count: (preGood.count || 0) + 1 };
    newGoods.splice(index, 1, newGood);

    this.setState({ shop: newGoods });
    if (this.handleRegion === this.regionTypes.shop) {
      this.addGoodToCart(good);
    }
  };
  minusGoodFromShop = good => {
    if (good.count === 0) {
      return;
    }
    const newGoods = [...this.state.shop];
    const index = newGoods.findIndex(g => g.id === good.id);
    const preGood = newGoods[index];
    const newGood = { ...preGood, count: preGood.count - 1 };
    newGoods.splice(index, 1, newGood);

    this.setState({ shop: newGoods });
    if (this.handleRegion === this.regionTypes.shop) {
      this.minusGoodFromCart(good);
    }
  };

  addGoodToCart = good => {
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
    if (this.handleRegion === this.regionTypes.cart) {
      this.addGoodToShop(good);
    }
  };
  minusGoodFromCart = good => {
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
    if (this.handleRegion === this.regionTypes.cart) {
      this.minusGoodFromShop(good);
    }
  };
  render() {
    return (
      <div>
        <Shop title="水果超市" goods={this.state.shop} addGood={good => {
          this.handleRegion = this.regionTypes.shop;
          this.addGoodToShop(good);
        }} minusGood={good => {
          this.handleRegion = this.regionTypes.shop;
          this.minusGoodFromShop(good);
        }}></Shop>
        <br/>
        <br />
        <Cart title="购物车" goods={this.state.cart} addGood={good => {
          this.handleRegion = this.regionTypes.cart;
          this.addGoodToCart(good)
        }} minusGood={good => {
          this.handleRegion = this.regionTypes.cart;
          this.minusGoodFromCart(good)
        }}></Cart>
      </div>
    );
  }
}
