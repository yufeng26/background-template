<!--
  - 用户列表
  -->
<template>
  <div class="user">
    <basic-container>
      <avue-crud
        ref="crud"
        :option="tableOption"
        v-model="form"
        :page="page"
        :data="list"
        @on-load="getList"
        @search-change="searchChange"
        @refresh-change="refreshChange"
        @size-change="sizeChange"
        @current-change="currentChange"
        @row-save="rowSave"
        @row-update="rowUpdate"
        @row-del="rowDel"
      >
        <template slot="username" slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
        <template slot="role" slot-scope="scope">
          <span v-for="(role, index) in scope.row.roleList" :key="index">
            <el-tag>{{ role.roleName }} </el-tag>&nbsp;&nbsp;
          </span>
        </template>
        <template slot="deptId" slot-scope="scope">
          {{ scope.row.deptName }}
        </template>
        <template slot="lockFlag" slot-scope="scope">
          <el-tag>{{ scope.label }}</el-tag>
        </template>
        <template slot="deptIdForm" slot-scope="scope">
          <avue-input-tree
            v-model="form.deptId"
            :dic="treeDeptData"
            :props="defaultProps"
            placeholder="请选择所属部门"
          />
        </template>
        <template slot="roleForm" slot-scope="scope">
          <avue-select
            v-model="role"
            :dic="rolesOptions"
            :props="roleProps"
            multiple
            placeholder="请选择角色"
          />
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import getData from "./user.json";

// 正则校验
var validateUsername = (rule, value, callback) => {
  const reg = /^[A-Za-z0-9]{4,20}$/;
  if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("姓名格式不正确"));
  }
};
var validateEmail = (rule, value, callback) => {
  const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("邮箱格式不正确"));
  }
};
var validaterealName = (rule, value, callback) => {
  const reg = /^[\u4e00-\u9fa5]{1,10}$/;
  if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("姓名格式不正确"));
  }
};

export default {
  name: "SysUser",
  data() {
    return {
      searchForm: {},
      // 表格头部字段信息
      tableOption: {
        border: true,
        index: true,
        indexLabel: "ID",
        stripe: true,
        menuAlign: "center",
        searchMenuSpan: 6,
        editBtn: true,
        delBtn: true,
        viewBtn: true,
        align: "center",
        addBtn: true,
        labelWidth: "100",
        searchLabelWidth: "100",
        column: [
          {
            fixed: true,
            label: "管理员名称",
            prop: "username",
            editDisabled: true,
            slot: true,
            search: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入用户名"
              },
              {
                min: 3,
                max: 20,
                message: "长度在 4 到 20 个数字或字母",
                trigger: "blur"
              },
              { validator: validateUsername, trigger: "blur" }
            ]
          },
          {
            label: "真实姓名",
            prop: "realName",
            editDisabled: false,
            search: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入真实姓名"
              },
              {
                min: 3,
                max: 20,
                message: "长度在 2 到 10 个字符",
                trigger: "blur"
              },
              { validator: validaterealName, trigger: "blur" }
            ]
          },
          {
            label: "密码",
            prop: "password",
            type: "password",
            value: "",
            hide: true,
            span: 24,
            editDisplay: false,
            rules: [
              {
                min: 6,
                max: 20,
                message: "长度在 6 到 20 个字符",
                trigger: "blur"
              }
            ]
          },
          {
            label: "所属部门",
            prop: "deptId",
            formslot: true,
            slot: true,
            span: 24,
            hide: true,
            dataType: "number",
            rules: [
              {
                required: true,
                message: "请选择部门",
                trigger: "change"
              }
            ]
          },
          {
            label: "手机号",
            prop: "phone",
            value: "",
            search: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入手机号"
              },
              {
                min: 11,
                max: 11,
                message: "长度在 11 个字符",
                trigger: "blur"
              }
            ]
          },
          {
            label: "角色",
            prop: "role",
            formslot: true,
            slot: true,
            overHidden: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请选择角色",
                trigger: "blur"
              }
            ]
          },
          {
            label: "邮箱",
            prop: "email",
            value: "",
            editDisabled: false,
            editDisplay: false,
            search: false,
            span: 24,
            rules: [
              {
                required: false,
                message: "请输入邮箱"
              },
              { validator: validateEmail, trigger: "blur" }
            ]
          },
          {
            label: "账户状态",
            prop: "lockFlag",
            type: "radio",
            slot: true,
            border: true,
            span: 24,
            rules: [
              {
                required: true,
                message: "请选择状态",
                trigger: "blur"
              }
            ],
            dicData: [
              {
                label: "有效",
                value: "0"
              },
              {
                label: "锁定",
                value: "9"
              }
            ]
          },
          {
            width: 180,
            label: "创建日期",
            prop: "createTime",
            type: "datetime",
            format: "yyyy-MM-dd HH:mm",
            valueFormat: "yyyy-MM-dd HH:mm:ss",
            editDisabled: true,
            addDisplay: false,
            span: 24
          }
        ]
      },
      treeDeptData: [
        { id: 1, parentId: 0, children: [], name: "默认部门", isLock: false },
        { id: 14, parentId: 0, children: [], name: "区块链", isLock: false }
      ],
      checkedKeys: [],
      roleProps: {
        label: "roleName",
        value: "roleId"
      },
      defaultProps: {
        label: "name",
        value: "id"
      },
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20, // 每页显示多少条,
        isAsc: false // 是否倒序
      },
      list: [],
      role: [],
      form: {},
      rolesOptions: [
        {
          roleId: 1,
          roleName: "管理员",
          roleDesc: "管理员",
          dsType: 0,
          dsScope: "2",
          createTime: "2017-10-29 15:45:51",
          updateTime: "2018-12-26 14:09:11",
          delFlag: "0"
        },
        {
          roleId: 9,
          roleName: "zcjRole",
          roleDesc: "zcj 测试",
          dsType: 0,
          dsScope: "",
          createTime: "2020-11-18 03:33:56",
          updateTime: null,
          delFlag: "0"
        }
      ]
    };
  },
  computed: {},
  watch: {
    role() {
      this.form.role = this.role;
    }
  },
  created() {},
  methods: {
    // 获取表格数据
    getList(page, params) {
      // getData是 user.json本地数据
      this.list = getData.data.records;
      this.page.total = getData.data.total;
    },
    // 点击搜索按钮
    searchChange(param, done) {
      this.searchForm = param;
      this.page.currentPage = 1;
      this.getList(this.page, param);
      done();
    },
    // 切换每页大小
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    // 调转到某一页
    currentChange(current) {
      this.page.currentPage = current;
    },
    // 刷新数据
    refreshChange() {
      this.getList(this.page);
    },
    // 更新弹窗内赋予初始值
    handleUpdate(row, index) {
      this.$refs.crud.rowEdit(row, index);
      this.form.password = undefined;
    },
    // 新增
    rowSave(form, done, loading) {
      this.$message.success("模拟网络请求");
      setTimeout(() => {
        this.$message.success("关闭按钮等待");
        loading();
      }, 1000);
      setTimeout(() => {
        this.$message.success("新增数据成功");
        done();
      }, 2000);
    },
    // 刷新
    refresh(val) {
      this.$message.success("刷新回调,当前分页对象" + JSON.stringify(val));
    },
    // 删除
    rowDel(form, index) {
      this.$message.success("成功删除数据");
    },
    // 更新
    rowUpdate(form, index, done, loading) {
      this.$message.success("模拟网络请求");
      setTimeout(() => {
        this.$message.success("关闭按钮等待");
        loading();
      }, 1000);
      setTimeout(() => {
        this.$message.success(
          "编辑数据" + JSON.stringify(form) + "数据序号" + index
        );
        done();
      }, 2000);
    }
  }
};
</script>
<style lang="scss">
.user {
  height: 100%;

  &__tree {
    padding-top: 3px;
    padding-right: 20px;
  }

  &__main {
    .el-card__body {
      padding-top: 0;
    }
  }
}
</style>
