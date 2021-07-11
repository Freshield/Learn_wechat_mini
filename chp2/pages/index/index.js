// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  compare: function(e) {
    console.log('button tap')
    console.log(e)
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