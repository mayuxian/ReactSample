//购物车
import React from 'react';
import { Good } from './Good';
import PropTypes from 'prop-types'

class Cart extends React.Component {
  static propTypes = {
    addGood: PropTypes.func.isRequired,
    minusGood: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.totalPrice = 0;
  }
  render() {
    this.totalPrice = 0;
    return (
      <>
        <div style={{ fontSize: "16px" }}>
          {this.props.title}
        </div>
        <table>
          <tbody>
            {
              this.props.goods.map(good => {
                this.totalPrice += good.price * good.count;
                return (
                  < tr key={good.id} >
                    <td>
                      <Good id={good.id} name={good.name} price={good.price * good.count}></Good>
                    </td>
                    <td>
                      <button onClick={() => this.props.minusGood(good)}>-</button>
                      &nbsp; {good.count || "0"} &nbsp;
                    <button onClick={() => this.props.addGood(good)}> +</button>
                    </td>
                  </tr>
                );
              })
            }
            <tr>
              <td>
                总额：{this.totalPrice}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export { Cart };