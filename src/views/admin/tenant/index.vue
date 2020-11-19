<!--
  - 租户列表
  -->
<template>
  <div class="app-container calendar-list-container">
    <basic-container>
      <avue-crud
        :data="list"
        :option="tableOption"
        @row-save="rowSave"
        @row-update="rowUpdate"
        @row-del="rowDel"
        @refresh-change="refresh"
      >
        <template slot="status" slot-scope="scope">
          <span v-if="scope.row.status == 0"
            ><el-tag type="success">正常</el-tag></span
          >
          <span v-if="scope.row.status == -1"
            ><el-tag type="info">禁用</el-tag></span
          >
          <span v-if="scope.row.status == -2"
            ><el-tag type="warning">过期</el-tag></span
          >
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import tableData from "./tenant.json";

export default {
  name: "TableRole",
  data() {
    return {
      searchForm: {},
      // 字段信息
      tableOption: {
        align: "center",
        menuAlign: "center",
        menuWidth: 400,
        viewBtn: true,
        index: true,
        indexLabel: "ID",
        labelWidth: "100",
        searchLabelWidth: "100",
        searchMenuSpan: 6,
        column: [
          {
            label: "机构名称",
            prop: "name",
            search: true,
          },
          {
            label: "机构编号",
            prop: "code",
            search: true,
          },
          {
            label: "手机号",
            prop: "contactPhone",
          },
          {
            label: "联系人",
            prop: "contactUsername",
            search: true, // 是否搜索条件
          },
          {
            label: "邮箱",
            prop: "contactEmail",
          },
          {
            label: "状态",
            prop: "status",
            slot: true, // 插槽
          },
          {
            label: "创建时间",
            prop: "createTime",
          },
        ],
      },
      defaultProps: {
        label: "name",
        value: "id",
      },
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20, // 每页显示多少条
      },
      list: [], // 表格数据
      form: {},
    };
  },
  created() {
    this.getList();
  },
  computed: {},
  methods: {
    getList() {
      // tableData user.json本地数据
      this.list = tableData.data.records;
      this.page.total = tableData.data.total;
    },
    searchChange(form, done) {
      this.searchForm = form;
      this.page.currentPage = 1;
      this.getList(this.page, form);
      done();
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    currentChange(current) {
      this.page.currentPage = current;
    },
    rowSave(form, done, loading) {
      this.$message.success("模拟网络请求");
      setTimeout(() => {
        this.$message.success("关闭按钮等待");
        loading();
      }, 1000);
      setTimeout(() => {
        this.$message.success("新增数据" + JSON.stringify(form));
        done();
      }, 2000);
    },
    refresh(val) {
      this.$message.success("刷新回调,当前分页对象" + JSON.stringify(val));
    },
    rowDel(form, index) {
      this.$message.success("删除数据" + JSON.stringify(form));
    },
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
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dialog__wrapper {
  .el-dialog {
    width: 61% !important;
    .dialog-main-tree {
      max-height: 400px;
      overflow-y: auto;
    }
  }
  .el-form-item__label {
    width: 20% !important;
    padding-right: 20px;
  }
  .el-form-item__content {
    margin-left: 20% !important;
  }
}
</style>
