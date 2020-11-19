<template>
  <!-- 首页模块 -->
  <div class="index">
    <div class="banner-text">
      <h3>Hi，欢迎使用BaaS平台！</h3>
      <p>
        唐泉区块链服务平台（TKBaaS，TK Blockchain as a
        Service）为企业及开发者提供一站式、高安全性、简单易用的区块链服务。
        TKBaaS
        区块链服务平台集成开发、管理和运维等功能，支持客户在自有云上快速部署联盟区块链网络环境。
      </p>
    </div>
    <el-row class="numGroup">
      <el-col :span="8">
        <div class="colItem">
          <span class="itemIcon"><i class="el-icon-user-solid"></i></span>
          <span class="itemText"
            >所有成员<br /><big>{{ num1 }}</big
            >个</span
          >
        </div>
      </el-col>
      <el-col :span="8">
        <div class="colItem">
          <span class="itemIcon"><i class="el-icon-s-tools"></i></span>
          <span class="itemText"
            >所有加入的联盟<br /><big>{{ num2 }}</big
            >个</span
          >
        </div>
      </el-col>
      <el-col :span="8">
        <div class="colItem">
          <span class="itemIcon"><i class="el-icon-s-order"></i></span>
          <span class="itemText"
            >我的资源<br /><big>{{ num3 }}</big
            >个</span
          >
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="12">
        <div class="list">
          <div class="header">推荐</div>
          <ul class="translate">
            <li class="translateBox">
              <div class="icon">
                <el-avatar icon="el-icon-aim"></el-avatar>
              </div>
              <div class="text">联盟链服务</div>
              <div
                class="doBtn"
                @click="() => this.$router.push('/alliance/index')"
              >
                查看
              </div>
            </li>
            <li class="translateBox">
              <div class="icon">
                <el-avatar icon="el-icon-files"></el-avatar>
              </div>
              <div class="text">存证服务</div>
              <div class="later">敬请期待</div>
            </li>
            <li class="translateBox">
              <div class="icon">
                <el-avatar icon="el-icon-wallet"></el-avatar>
              </div>
              <div class="text">资产服务</div>
              <div class="later">敬请期待</div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="list">
          <div class="header">待处理</div>
          <ul class="pending">
            <li class="pendingBox">
              <div class="word">机构注册申请<span>0</span>个</div>
              <div
                class="icon"
                @click="() => this.$router.push('/account/admin/approval')"
              >
                <el-avatar icon="el-icon-d-arrow-right"></el-avatar>
              </div>
            </li>
            <li class="pendingBox">
              <div class="word">加入联盟申请<span>0</span>个</div>
              <div
                class="icon"
                @click="
                  () =>
                    this.$router.push('/alliance/approve/list', { indexKey: 1 })
                "
              >
                <el-avatar icon="el-icon-d-arrow-right"></el-avatar>
              </div>
            </li>
            <li class="pendingBox">
              <div class="word">加入节点申请<span>0</span>个</div>
              <div
                class="icon"
                @click="
                  () =>
                    this.$router.push('/alliance/approve/list', { indexKey: 2 })
                "
              >
                <el-avatar icon="el-icon-d-arrow-right"></el-avatar>
              </div>
            </li>
            <li class="pendingBox">
              <div class="word">节点升级申请<span>0</span>个</div>
              <div
                class="icon"
                @click="
                  () =>
                    this.$router.push('/alliance/approve/list', { indexKey: 3 })
                "
              >
                <el-avatar icon="el-icon-d-arrow-right"></el-avatar>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <!-- </basic-container> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Wel",
  data() {
    return {
      num1: 10,
      num2: 20,
      num3: 30,
      isText: false,
    };
  },
  computed: {
    ...mapGetters(["website"]),
  },
  methods: {},
};
</script>

<style scoped="scoped" lang="less">
.index {
  text-align: left;
  padding: 10px 15px;
  .banner-text {
    background-color: #409eff;
    color: #fff;
    padding: 5px 15px;
    margin-bottom: 10px;
  }
  .numGroup {
    background-color: #fff;
    padding: 25px 40px 15px 45px;
    margin-bottom: 10px;
    .colItem {
      display: flex;
      align-items: center;
      .itemIcon {
        width: 60px;
        height: 60px;
        line-height: 60px;
        font-size: 42px;
        text-align: center;
        display: inline-block;
        color: #fff;
        background-color: #409eff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .itemText {
        big {
          font-size: 24px;
          color: #409eff;
          font-weight: bold;
        }
      }
    }
  }
  .list {
    background-color: #fff;
    padding: 10px 20px;
    height: 304px;
    .header {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .translate {
      padding: 0;
      .translateBox {
        border: 1px solid #eeeeee;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .icon {
          width: 60px;
          margin-right: 30px;
          .el-avatar--icon {
            font-size: 36px;
            background: #fff;
            color: #c0c4cc;
            padding-top: 4px;
          }
        }
        .text {
          width: calc(100% - 170px);
        }
        .doBtn {
          color: #0066ff;
          cursor: pointer;
        }
        .later {
          color: #cccccc;
        }
        .later,
        .doBtn {
          width: 80px;
          text-align: right;
        }
      }
    }
    .pending {
      padding: 0;
      .pendingBox {
        padding: 1px 10px;
        background-color: #eeeeee;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .word {
          width: calc(100% - 40px);
          span {
            color: #0066ff;
            margin: 0 5px;
            font-weight: bold;
          }
        }
        .icon {
          width: 40px;
          cursor: pointer;
          .el-avatar--icon {
            font-size: 18px;
            background: #eeeeee;
            color: #0066ff;
            padding-top: 4px;
          }
        }
      }
    }
  }
}
</style>
