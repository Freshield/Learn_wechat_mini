// pages/index/index.js
var music_src = 'http://m10.music.126.net/20210727201925/dbad7ed7355ecb235df7d30cf3ed2abd/ymusic/6ce6/b2c1/9fac/ed75227c13e71a49cb885007385d08c2.mp3'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: 0,
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
      id: 1, title: '钢琴协奏曲', singer: '肖邦', src: music_src, coverImgUrl: '/images/cover.jpg'
    }, {
      id: 2, title: '奏鸣曲', singer: '莫扎特', src: music_src, coverImgUrl: '/images/cover.jpg'
    }, {
      id: 3, title: '欢乐颂', singer: '贝多芬', src: music_src, coverImgUrl: '/images/cover.jpg'
    }, {
      id: 4, title: '爱之梦', singer: '李斯特', src: music_src, coverImgUrl: '/images/cover.jpg'
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
    var that = this
    this.audioCtx.onError(function() {
      console.log('播放失败：' + that.audioCtx.src)
    })
    // 播放完了自动换下一曲
    this.audioCtx.onEnded(function() {
      that.next()
    })
    // 自动更新播放进度
    this.audioCtx.onPlay(function() {})
    this.audioCtx.onTimeUpdate(function() {
      that.setData({
        'play.duration': formatTime(that.audioCtx.duration),
        'play.currentTime': formatTime(that.audioCtx.currentTime),
        'play.percent': that.audioCtx.currentTime / that.audioCtx.duration * 100
      })
    })
    this.setMusic(0)
    function formatTime(time) {
      var minute = Math.floor(time / 60) % 60
      var second = Math.floor(time) % 60
      return (minute < 10 ? '0' + minute : minute) + ':' +
      (second < 10 ? '0' + second : second)
    }
  },
  setMusic: function(index) {
    var music = this.data.playlist[index]
    this.audioCtx.src = music.src
    this.audioCtx.seek(0)
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
  sliderChange: function (e) {
    var second = e.detail.value * this.audioCtx.duration / 100
    this.audioCtx.seek(second)
  },
  changePage: function (e) {
    var page = e.target.dataset.page
    this.setData({
      item: page
    })
  },
  change: function(e) {
    var index = e.currentTarget.dataset.index
    this.setMusic(index)
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