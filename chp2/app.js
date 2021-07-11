App({
  onLaunch: function(options) {
    console.log('onlaunch')
    console.log(options)
  },
  onShow: function(options) {
    console.log('onShow')
    console.log(options)
  },
  onHide: function() {
    console.log('onHide')
  },
  onError: function(error) {
    console.log('onError')
    console.log(error)
  },
  onPageNotFound: function(options) {
    console.log('onPageNotFound')
    console.log(options)
  },
  num: 123,
  test: function() {
    console.log('test')
  }
})