<template>
  <div class="avue-sidebar">
    <logo />
    <el-scrollbar style="height: 100%">
      <div v-if="validatenull(getMenuList)" class="avue-sidebar--tip">
        没有发现菜单
      </div>
      <el-menu
        :default-active="nowTagValue"
        :show-timeout="200"
        :collapse="keyCollapse"
        unique-opened
        mode="vertical"
      >
        <sidebar-item
          :menu="getMenuList"
          :screen="screen"
          :props="website.menu.props"
          :collapse="keyCollapse"
          first
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import logo from "../logo";
import sidebarItem from "./sidebarItem";
import getMenu from "@/util/menuList.json";
export default {
  name: "Sidebar",
  inject: ["Index"],
  components: { sidebarItem, logo },
  created() {
    // console.log(getMenu.content);
    // this.Index.openMenu(this.menuId);
  },
  computed: {
    ...mapGetters(["website", "tag", "keyCollapse", "screen"]),
    nowTagValue: function () {
      return this.$router.$avueRouter.getValue(this.$route);
    },
    getMenuList: function () {
      return getMenu.content;
    },
  },
};
</script>


