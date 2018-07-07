// components/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabBar: {
      type: Array,
      value: {
        color: '#9e9e9e',
        selectedColor: '#f00',
        backgroundColor: '#fff',
        borderStyle: '#ccc',
        list: [{
          pagePath: "/pages/index/index",
          iconPath: "/static/images/ic_menu_choice_nor.png",
          selectedIconPath: "/static/images/ic_menu_choice_pressed.png",
          text: "主页",
          pageTum: 'redirect',
          active: true
        }, {
          pagePath: "/pages/create/create",
          iconPath: "/static/images/ic_menu_me_nor.png",
          selectedIconPath: "/static/images/ic_menu_me_pressed.png",
          text: "新建",
          pageTum: 'navigate',
          active: false
        }, {
          pagePath: "/pages/me/me",
          iconPath: "/static/images/ic_menu_me_nor.png",
          selectedIconPath: "/static/images/ic_menu_me_pressed.png",
          text: "我",
          pageTum: 'redirect',
          active: false
        }],
        position: 'bottom'
      }
    },
    activeBar: {
      type: String,
      value: 'me'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
