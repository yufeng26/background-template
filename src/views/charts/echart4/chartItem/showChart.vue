<template>
  <div class="chart">
    <div class="title">{{ msg }}</div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :md="24" :lg="12" :xl="7">
          <div class="grid-content bg-purple">
            <TwoChart />
          </div>
        </el-col>
        <el-col :md="24" :lg="12" :xl="10">
          <div class="grid-content bg-purple">
            <OneChart />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :md="24" :lg="12" :xl="7">
          <div class="grid-content bg-purple">
            <ThreeChart />
          </div>
        </el-col>
        <el-col :md="24" :lg="12" :xl="7">
          <div class="grid-content bg-purple">
            <FourChart />
          </div>
        </el-col>
        <el-col :md="24" :lg="12" :xl="10">
          <div class="grid-content bg-purple">
            <FiveChart />
          </div>
        </el-col>
        <el-col :md="24" :lg="12" :xl="7">
          <div class="grid-content bg-purple">
            <SixChart />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import OneChart from "./oneChart.vue";
import TwoChart from "./twoChart.vue";
import ThreeChart from "./threeChart.vue";
import FourChart from "./fourChart.vue";
import FiveChart from "./fiveChart.vue";
import SixChart from "./sixChart.vue";

export default {
  name: "ChartBox",
  components: {
    OneChart,
    TwoChart,
    ThreeChart,
    FourChart,
    FiveChart,
    SixChart,
  },
  data() {
    return {
      msg: "电子库房智能化平台",
    };
  },
};
</script>
<style>
.chart {
  width: 100%;
  height: 100%;
  background-color: #2a2c46;
}
.chart .title {
  height: 70px;
  background-color: #232747;
  color: #ffffff;
  font-size: 36px;
  line-height: 70px;
  text-align: center;
  box-shadow: 5px 5px 5px #1a1313;
  margin: 0px auto 10px auto;
}
.chart .content {
  padding: 0 30px;
  color: #ffffff;
}
.grid-content {
  border: 3px solid #30304d;
  border-radius: 3px;
  margin-top: 30px;
}
</style>
