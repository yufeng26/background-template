# background-template

一个管理后台的模板，基于 vue+element+Avue+G2 图表；测试模块

## 安装教程

安装依赖 npm install

编译运行 npm run dev

编译打包 npm run build

## 使用说明

1.左侧菜单 路由和文件路径 本地数据存储于 src/util/menuList.json

### 2.avue-crud 插件使用开发文档地址：

https://www.bookstack.cn/read/avue-2.x/e8854f692e45d463.md

xxxx
xxxx
xxxx

## 文件路径说明

1.登录页面： src/page/login/index.vue  
2.首页：src/page/wel.vue  
3.用户列表：src/views/admin/user/index.vue  
4.菜单管理：src/views/admin/menu/index.vue  
5.角色管理：src/views/admin/role/index.vue  
6.部门管理：src/views/admin/dept/index.vue  
7.租户管理：src/views/admin/tenant/index.vue

## Avue-crud 插件参数配置说明：

<avue-crud  
ref="crud"  
v-model="form" // 绑定表单  
:page="page" // 分页  
:data="tableData" // 表格数据  
:table-loading="tableLoading" // 加载数据 lodaing  
:option="tableOption" // 表格数据参数  
@on-load="getList" // 初始化获取数据  
@search-change="searchChange" // 搜索  
@refresh-change="refreshChange" // 刷新  
@size-change="sizeChange" // 每页大小更改  
@current-change="currentChange" // 切换页码  
@row-update="handleUpdate" // 更新编辑  
@row-save="handleSave" // 新增  
@row-del="rowDel" 、、 删除  
/>  
//自定义 template  
<template slot="lockFlag" slot-scope="scope">  
<el-tag>{{ scope.label }}</el-tag>  
</template>  
<avue-crud

avue 监听 form 某一字段值来进行动态显隐

column：【  
{  
label: "ID", // 参数名称  
prop: "id", // 参数  
minWidth: 200,// 最小宽度  
hide: true, // 列表隐藏  
editDisplay: false, // 编辑不可见  
addDisplay: false, // 新增不可见  
editDisabled: true, // 不可编辑字段  
addDisabled: true, // 新增不可编辑字段  
search: true, // 搜索条件  
searchSpan: 5, // 搜索框单个宽度  
rules: [
{ required: true, message: "请输入 SSH 端口", trigger: "blur" }
],  
formslot: true, // 表单自定义 idForm this.$refs.crud.rowEdit(row, index); this.$refs.crud.formRules  
typeslot: true,  
Solt：列表数据自定义，  
type: "datetime", // 类型时间 radio, select 等  
format: "yyyy-MM-dd hh:mm:ss",  
valueFormat: "yyyy-MM-dd hh:mm:ss",  
sortable: true, // 是否排序

}  
】
