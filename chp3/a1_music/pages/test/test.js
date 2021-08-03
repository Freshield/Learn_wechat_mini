// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  scroll: function(e) {
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var audioCtx = wx.createInnerAudioContext()
    audioCtx.src = 'http://m10.music.126.net/20210727201925/dbad7ed7355ecb235df7d30cf3ed2abd/ymusic/6ce6/b2c1/9fac/ed75227c13e71a49cb885007385d08c2.mp3'
    audioCtx.onPlay(res => {
      console.log('开始播放')
    })
    audioCtx.onError(res => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    // audioCtx.play()
  },

  sliderChanging: e => {
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})