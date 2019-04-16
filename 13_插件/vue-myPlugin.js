/*
自定义的vue插件模块
 */
(function (window) {
  // 创建插件对象
  const MyPlugin = {}
  // 插件对象必须有install方法(不是我们亲自调用)
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue的myGlobalMethod()')
    }

    // 2. 添加一个全局资源(asset)
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive---' + binding.value
    })

    // 3. 添加一个实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm的$myMethod()')
    }
  }


  // 向外暴露
  window.MyPlugin = MyPlugin
})(window)