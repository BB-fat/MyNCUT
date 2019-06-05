// pages/my/my.js
const app = getApp()
var util = require('../../utils/util.js')

import {
  myURL
} from "../../setting.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn2: {
      tapFun: "tapBtn6",
      iconHeight: 72,
      iconWidth: 72,
      iconSrc: "cloud://incut-dev-hzz83.696e-incut-dev-hzz83/IMG/my/myfavor.png",
      text: "我的收藏"
    },
    btn1: {
      tapFun: "tapBtn1",
      iconHeight: 72,
      iconWidth: 72,
      iconSrc: "cloud://incut-dev-hzz83.696e-incut-dev-hzz83/IMG/my/graduation.png",
      text: "毕业资格"
    },    
    btn3: {
      tapFun: "tapBtn3",
      iconHeight: 72,
      iconWidth: 72,
      iconSrc: "cloud://incut-dev-hzz83.696e-incut-dev-hzz83/IMG/my/feedback.png",
      text: "问题反馈"
    },
    btn4: {
      tapFun: "tapBtn4",
      iconHeight: 72,
      iconWidth: 72,
      iconSrc: "cloud://incut-dev-hzz83.696e-incut-dev-hzz83/IMG/my/about.png",
      text: "关于我们"
    }
  },

  tapBtn1: function() {
    wx.navigateTo({
      url: '../webview/webview?mode=normal&url=https://app.ncut.edu.cn/w_graduation/graduate/list',
    })
  },
  tapBtn2: function() {
    util.windowInfo()
  },
  tapBtn3: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  tapBtn4: function() {
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  },
  tapBtn5: function() {
    util.windowInfo()
  },
  tapBtn6: function(e) {
    wx.navigateTo({
      url: '../myFavor/myFavor',
    })
  },

  // 浏览插画
  seePic:function(){
    wx.previewImage({
      // urls: [myURL+"/static/picture.jpeg"],
      urls: ["cloud://incut-dev-hzz83.696e-incut-dev-hzz83/IMG/my/picture.jpeg"],
    });
  },

  onShow: function() {
    var that = this
    if (app.globalData.userInfo == null) {
      wx.switchTab({
        url: '../index/index',
      })
    } 
    // 首次加载流量条
    else if (this.data.wifiProgress == undefined) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
      wx.request({
        url: myURL + '/wifi',
        data: {
          openid: app.globalData.openid
        },
        success(res) {
          that.setData({
            wifiProgress: parseInt(parseFloat(res.data) / (30 * 1024) * 100),
            wifiLeft: (30 - parseFloat(res.data) / 1024).toFixed(2)
          })
        }
      })
    } else {
      // 让进度条每一次切换到这个页面都能加载动画
      var wifiProgress = this.data.wifiProgress
      this.setData({
        wifiProgress: 0,
      })
      this.setData({
        wifiProgress: wifiProgress
      })
    }
  },
})