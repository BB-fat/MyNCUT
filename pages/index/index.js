// pages/index/index.js

var util = require('../../utils/util.js')
import {
  myURL
} from "../../setting.js"
import {
  login
} from '../../utils/login.js'

var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn1:{
      btnWidth:299,
      btnHeight:192,
      // mgtopbtn:6,
      fontsize:35,
      tapFunc:"toClassTable",
      mgtopimg:10,
      imgWidth:100,
      imgHeight:90,
      imgUrl:"../../imgs/index/course.png",
      pdtoptxt:20,
      mglefttxt:22,          
      btnTxt:"课表"
    },
    btn2: {
      btnWidth: 302,
      btnHeight: 152,
      mgleftbtn: 44,
      fontsize: 30,
      tapFunc: "toClassroom",
      imgWidth: 75,
      imgHeight: 75,
      mgtopimg: 15,     
      imgUrl: "../../imgs/index/room.png",      
      mglefttxt: 22,
      pdtoptxt: 10,
      btnTxt: "教室"
    },
    btn3: {
      position:"absolute",
      btnWidth: 299,
      btnHeight: 105,
      mgtopbtn: 36,
      fontsize: 30,
      tapFunc: "toGrade",
      imgWidth: 51,
      imgHeight: 51,
      mgtopimg: 22,
      imgUrl: "../../imgs/index/grade.png",
      mglefttxt: 11,
      pdtoptxt: 5,
      btnTxt: "成绩"
    },
    btn4: {
      position: "absolute",
      btnWidth: 129,
      btnHeight: 135,
      mgtopbtn: 7,
      mgleftbtn:345,
      fontsize: 25,
      tapFunc: "toGradePoint",
      imgWidth: 64,
      imgHeight: 56,
      imgViewW:120,
      imgViewH:50,
      mgtopimgView: 19,
      imgUrl: "../../imgs/index/average.png",
      txtWidth:120,
      btnTxt: "绩点"
    },
    btn5: {
      position: "absolute",
      btnWidth: 129,
      btnHeight: 135,
      mgtopbtn: 7,
      mgleftbtn: 518,
      fontsize: 25,
      tapFunc: "toGraduate",
      imgWidth: 64,
      imgHeight: 56,
      imgViewW: 120,
      imgViewH: 50,
      mgtopimgView: 19,
      imgUrl: "../../imgs/index/graduate.png",
      txtWidth: 120,
      mgtoptxt:2,
      btnTxt: "学分"
    },
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log("do onload()")
    var that=this
    wx.request({
      url: myURL+'/publicinfo',
      success(res){        
        that.setData({
          indexBanner:res.data.indexBanner,
          indexNotice:res.data.indexNotice
        })
      },
      fail(res){
        console.log('banner&notice fail')
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onReady: function () {
    login(this)
    console.log("do login()")    
  },

   
    //轮播图点击事件
  // swipclick: function(e) {
  //     console.log(e)
  //     wx.navigateTo({
  //       url: '../webview/webview?mode=normal&url=' + this.data.indexBanner[e.currentTarget.dataset.index]['msgUrl']
  //     })
  //   },
  swipclick: function (e) {
    util.windowInfo()
  },


  // 跳转至课表
  toClassTable: function() {
    wx.navigateTo({
      url: '../webview/webview?mode=normal&url=https://app.ncut.edu.cn/w_kecheng',
    })
  },

  // 跳转至绩点
  toGradePoint: function() {
    wx.navigateTo({
      url: '../webview/webview?mode=normal&url=https://app.ncut.edu.cn/w_kecheng/grade/list',
    })
  },

  // 跳转至成绩
  toGrade: function() {
    wx.navigateTo({
      url: '../webview/webview?mode=normal&url=https://app.ncut.edu.cn/w_score',
    })
  },

  // 跳转至我的学分
  toGraduate: function() {
    wx.navigateTo({
      url: '../webview/webview?mode=normal&url=https://app.ncut.edu.cn/w_exam/default/graduate',
    })
  },

  // 跳转至教室
  toClassroom: function() {
    wx.navigateTo({
      url: '../webview/webview?mode=normal&url=https://app.ncut.edu.cn/w_room/emroom/index',
    })
  },

})