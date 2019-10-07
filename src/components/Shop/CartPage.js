
import GoodStore from './GoodStore';
import { Cart } from './Cart';

export default class CartPage extends React.Component {

  state = {
    goods: GoodStore.getGoods()
  }
  render() {
    return (
      <div>

        <Cart></Cart>
      </div>
    )
  }
}