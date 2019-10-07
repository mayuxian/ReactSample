//购物车

import React from 'react';

class Cart extends React.Component {
  constructor({ goods: [] }) {
    this.goods = goods;
  }
  render() {
    return (
      <>
        <table>
          <tbody>
            this.goods.map(good => {
              <tr key={this.id}>
                <td>
                  <Good id={this.id} name={this.name} price={this.price * this.count}></Good>
                </td>
                <td>
                  <button onClick={() => { }}>-</button>
                  {this.count}
                  <button>+</button>
                </td>
              </tr>
            })
        </tbody>
        </table>
      </>
    )
  }
}

export { Cart };