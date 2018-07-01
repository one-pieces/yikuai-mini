// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-06-10',
    time: '09:00',
    isAllDay: false,
    address: ''
  },
  bindDateChange({ detail }) {
    this.setData({
      date: detail.value
    });
  },
  bindTimeChange({ detail }) {
    this.setData({
      time: detail.value
    });
  },
  timeSwitchChange({ detail }) {
    this.setData({
      isAllDay: detail.value
    });
  },
  navigateToAddress() {
    wx.navigateTo({
      url: `address/address?searchKey=${this.data.address}`
    });
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