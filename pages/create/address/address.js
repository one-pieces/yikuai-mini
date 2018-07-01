// pages/create/address/address.js
import { QQMapConfig } from '../../../config/index';
// import debounce from '../../../utils/debounce/index';
const debounce = require('../../../lib/lodash.debounce/index');
const QQMapWX = require('../../../lib/qqmap-wx-jssdk1.0/qqmap-wx-jssdk.min');
let qqmapsdk;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '',
    addressList: []
  },

  search: debounce(function(e) {
    this.setData({
      searchKey: e.detail.value
    });
    if (this.data.searchKey) {
      this.getMapSuggestion(this.data.searchKey);
      return;
    }
    this.setData({
      addressList: []
    });
  }, 1000),

  getMapSuggestion(keyword) {
    qqmapsdk.getSuggestion({
      keyword,
      success: (res) => {
        if (!res.data.length) {
          wx.showToast({
            title: '找不到相近的地址~',
            icon: 'none',
            duration: 2000
          })
        }
        this.setData({
          addressList: res.data
        });
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    })
  },

  chooseAddress({ currentTarget }) {
    const pages = getCurrentPages();
    const prevPage = pages[pages.length - 2];
    prevPage.setData({
      address: currentTarget.dataset.title
    });
    wx.navigateBack({
      url: `../create`
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
    this.setData({
      searchKey: options.searchKey
    });
    if (this.data.searchKey) {
      this.getMapSuggestion(this.data.searchKey);
    }
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