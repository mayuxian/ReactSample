const GoodStore = {
  getGoods() {
    //正常应该请求数据，目前直接返回模拟数据
    return [
      { id: "1", name: "苹果", price=5.0 },
      { id: "2", name: "香蕉", price=6.0 },
      { id: "3", name: "橘子", price=3.0 },
    ]
  }
}

export default GoodStore;