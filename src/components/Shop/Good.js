class Good extends React.Component {
  constructor({ id, name, price, description }) {
    // super(props);
    this.id = id;
    this.name = name;
    this.price = price;
  }
  render() {
    return (
      <div>
        <div style="font-size=16px">
          物品：{this.name}
        </div>
        <br />
        <div style={{ display: this.description ? true : false }}>
          描述信息:{this.description}
        </div>
        <br />
        金额：{this.price}
      </div >
    )
  }
}

export { Good };