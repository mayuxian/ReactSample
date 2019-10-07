import React from 'react';

class Good extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ border: "1px solid gray" }}>
        <div style={{ fontSize: "20px" }} >
          物品：{this.props.name}
        </div>
        <div style={{ display: this.props.description ? "inline" : "none" }}>
          描述信息:{this.props.description}
        </div>
        <br />
        金额：{this.props.price || 0}
      </div >
    )
  }
}

export { Good };