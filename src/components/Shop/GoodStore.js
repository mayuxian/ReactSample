const GoodStore = {
  getGoods() {
    //正常应该请求数据，目前直接返回模拟数据
    return [
      { id: "1", name: "苹果", price: "5.00", description: "富士苹果，香甜可口" },
      { id: "2", name: "香蕉", price: "6.00", description: "海南香蕉，香甜可口" },
      { id: "3", name: "橘子", price: "3.00", description: "淮南橘子，香甜可口" },
    ]
  }
}

export default GoodStore;