// pages/create/create.js
import dayjs from '../../lib/dayjs/dayjs.min';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: dayjs().format('YYYY-MM-DD'),
    startTime: '09:00',
    endDate: '',
    endTime: '',
    isAllDay: false,
    address: '',
    isMoreOptionShown: false,
    isNeedUserInfo: false,
    isNeedUsername: false,
    isNeedPhone: false
  },
  bindStartDateChange({ detail }) {
    this.setData({
      startDate: detail.value
    });
  },
  bindStartTimeChange({ detail }) {
    this.setData({
      startTime: detail.value
    });
  },
  bindEndDateChange({ detail }) {
    this.setData({
      endDate: detail.value
    });
  },
  bindEndTimeChange({ detail }) {
    this.setData({
      endTime: detail.value
    });
  },
  timeSwitchChange({ detail }) {
    this.setData({
      isAllDay: detail.value,
      endDate: this.data.startDate
    });
  },
  navigateToAddress() {
    wx.navigateTo({
      url: `address/address?searchKey=${this.data.address}`
    });
  },
  showMoreOption() {
    const isMoreOptionShown = !this.data.isMoreOptionShown;
    const endDate = isMoreOptionShown ? this.data.startDate : '';
    const endTime = isMoreOptionShown ? this.data.startTime : '';
    const isNeedUserInfo = false;
    const isNeedUsername = isNeedUserInfo;
    const isNeedPhone = isNeedUserInfo;
    this.setData({
      isMoreOptionShown,
      endDate,
      endTime,
      isNeedUserInfo,
      isNeedUsername,
      isNeedPhone
    });
  },
  userInfoSwitchChange() {
    const isNeedUserInfo = !this.data.isNeedUserInfo;
    const isNeedUsername = isNeedUserInfo;
    const isNeedPhone = isNeedUserInfo;
    this.setData({
      isNeedUserInfo,
      isNeedUsername,
      isNeedPhone
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