// pages/index/index.js
Page({
  num1: 0,
  num2: 0,
  num1change: function(e) {
    this.num1 = Number(e.detail.value)
    console.log('第1个数字为：' + this.num1)
  },
  num2change: function(e) {
    this.num2 = Number(e.detail.value)
    console.log('第2个数字为：' + this.num2)
  },
  compare: function() {
    var str = '两数相等'
    if (this.num1 > this.num2) {
      str = '第1个数大'
    } else if (this.num1 < this.num2) {
      str = '第2个数大'
    }
    this.setData({result: str})
  },
  change: function(e) {
    this[e.currentTarget.id] = Number(e.detail.value)
  },
  change2: function(e) {
    this[e.target.dataset.id] = Number(e.detail.value)
  },
  /**
   * 页面的初始数据
   */
  data: {
    num1: 0,
    num2: 0,
    result: ''
  },
  change3: function(e) {
    var data = {}
    data[e.target.dataset.id] = Number(e.detail.value)
    this.setData(data)
  },
  formCompare: function(e) {
    var str = '两数相等'
    var num1 = Number(e.detail.value.num1)
    var num2 = Number(e.detail.value.num2)
    if (num1 > num2) {
      str = "第1个数大"
    } else if (num1 < num2) {
      str = '第2个数大'
    }
    console.log(num1, num2)
    this.setData({result: str})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('begin')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('done render')
    var app = getApp()
    console.log(app.num)
    app.test()
    // wx.navigateTo({
    //   url: '/pages/test/test?name1=value&name2=value2',
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('down to the end')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('up to the begin')
  },

  onPageScroll: function(options) {
    console.log('scrolling')
    console.log('distance:' + options.scrollTop)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  innerTap: function(e) {
    console.log('inner')
  },

  middleTap: function(e) {
    console.log('middle')
  },

  outerTap: function(e) {
    console.log('outter')
  }
})