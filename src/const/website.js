export default {
  title: "管理后台开发框架",
  copyright: "Copyright All rights reserved.",
  isFirstPage: true, // 配置首页不可关闭
  key: "pigx", // 配置主键,目前用于存储
  whiteList: ["/login", "/wel/index", "/404", "/401", "/lock"], // 配置无权限可以访问的页面
  whiteTagList: ["/login", "/wel/index", "/404", "/401", "/lock"], // 配置不添加tags页面 （'/advanced-router/mutative-detail/*'——*为通配符）
  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    group: [],
    close: false
  },
  // 配置菜单的属性
  menu: {
    props: {
      label: "label",
      path: "path",
      icon: "icon",
      children: "children"
    }
  }
};
