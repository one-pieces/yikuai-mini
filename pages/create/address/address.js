// pages/create/address/address.js
import { QQMapConfig } from '../../../config/index';
const QQMapWX = require('../../../lib/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.min');
let qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBusy: false,
    searchKey: ''
  },

  search({ detail }) {
    this.setData({
      searchKey: detail.value
    });
    // 调用接口
    console.log('mmm', this.data.searchKey);
    qqmapsdk.getSuggestion({
      keyword: this.data.searchKey,
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: QQMapConfig.key
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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