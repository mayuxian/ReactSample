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
                    <button onClick={() => this.props.minusGood(good)}>-</button>
                    &nbsp; {good.count || "0"} &nbsp;
                    <button onClick={() => this.props.addGood(good)}> +</button>
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