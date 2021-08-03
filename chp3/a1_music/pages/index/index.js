// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    item: 0,
    _src: 'http://m10.music.126.net/20210727201925/dbad7ed7355ecb235df7d30cf3ed2abd/ymusic/6ce6/b2c1/9fac/ed75227c13e71a49cb885007385d08c2.mp3',
    state: 'paused',
    playIndex: 0,
    play: {
      currentTime: '00:00',
      duration: '00:00',
      percent: 0,
      title: '',
      singer: '',
      coverImgUrl: '/images/cover.jpg'
    },
    playlist: [{
      id: 1, title: '钢琴协奏曲', singer: '肖邦', src: Page._src, coverImgUrl: '/images/cover.jpg'
    }, {
      id: 2, title: '奏鸣曲', singer: '莫扎特', src: Page._src, coverImgUrl: '/images/cover.jpg'
    }, {
      id: 3, title: '欢乐颂', singer: '贝多芬', src: Page._src, coverImgUrl: '/images/cover.jpg'
    }, {
      id: 4, title: '爱之梦', singer: '李斯特', src: Page._src, coverImgUrl: '/images/cover.jpg'
    }]
  },
  changeItem: function(e) {
    this.setData({
      item: e.target.dataset.item
    })
  },
  changeTab: function(e) {
    this.setData({
      item: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  audioCtx: null,
  onReady: function () {
    this.audioCtx = wx.createInnerAudioContext()
    this.setMusic(0)
  },
  setMusic: function(index) {
    var music = this.data.playlist[index]
    this.audioCtx.src = this.data._src
    this.setData({
      playIndex: index,
      'play.title': music.title,
      'play.singer': music.singer,
      'play.converImgUrl': music.coverImgUrl,
      'play.currentTime': '00:00',
      'play.duration': '00:00',
      'play.percent': 0
    })
  },
  play: function() {
    this.audioCtx.play()
    this.setData({state: 'running'})
  },
  pause: function() {
    this.audioCtx.pause()
    this.setData({state: 'paused'})
  },
  next: function() {
    var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
    this.setMusic(index)
    if (this.data.state === 'running') {
      this.play()
    }
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