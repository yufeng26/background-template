<template>
  <div class="chart">
    <div class="title">
      <div class="curTime">{{ curTime }}</div>
      <h6>{{ msg }}</h6>
    </div>
    <div class="content">
      <a-row :gutter="20">
        <a-col :lg="24" :xl="12" :xxl="7">
          <a-row :gutter="20">
            <div class="grid-content bg-purple">
              <TwoChart />
            </div>
          </a-row>
          <a-row :gutter="20">
            <div class="grid-content bg-purple">
              <OneChart />
            </div>
          </a-row>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="10">
          <div class="grid-content bg-purple">
            <ShArea />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="7">
          <a-row :gutter="20">
            <div class="grid-content bg-purple">
              <Liebiao />
            </div>
          </a-row>
          <a-row :gutter="20">
            <div class="grid-content bg-purple">
              <ThreeChart />
            </div>
          </a-row>
        </a-col>
      </a-row>
      <a-row :gutter="20">
        <a-col :lg="24" :xl="12" :xxl="7" style=" padding: 0">
          <div class="grid-content bg-purple">
            <FourChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="10">
          <div class="grid-content bg-purple">
            <FiveChart />
          </div>
        </a-col>
        <a-col :lg="24" :xl="12" :xxl="7" style=" padding: 0">
          <div class="grid-content bg-purple">
            <SixChart />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { Row, Col } from "ant-design-vue";
import OneChart from "./chartItem/oneChart.vue";
import TwoChart from "./chartItem/twoChart.vue";
import ThreeChart from "./chartItem/threeChart.vue";
import FourChart from "./chartItem/fourChart.vue";
import FiveChart from "./chartItem/fiveChart.vue";
import SixChart from "./chartItem/sixChart.vue";
import ShArea from "./chartItem/shArea.vue";
// import ShanghaiArea from "./chart/shanghaiArea.vue";
import Liebiao from "./chartItem/liebiao.vue";

export default {
  name: "Home",
  components: {
    "a-row": Row,
    "a-col": Col,
    OneChart,
    TwoChart,
    ThreeChart,
    FourChart,
    FiveChart,
    SixChart,
    // ShanghaiArea,
    Liebiao,
    ShArea
  },
  data() {
    return {
      msg: "电子库房智能化平台",
      curTime: ""
    };
  },
  mounted() {
    this.timer = setInterval(this.getCurrentDate, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    getCurrentDate() {
      var timeStr = "";
      var curDate = new Date();
      var curYear = curDate.getFullYear(); //获取当前年份
      var curMonth = curDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var curDay = curDate.getDate(); //获取当前日(1-31)
      var curWeekDay = curDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      var curHour = curDate.getHours(); //获取当前小时数(0-23)
      var curMinute = curDate.getMinutes(); // 获取当前分钟数(0-59)
      var curSec = curDate.getSeconds(); //获取当前秒数(0-59)
      timeStr = curYear + "年" + curMonth + "月" + curDay + "日 周";
      switch (curWeekDay) {
        case 0:
          timeStr += "日";
          break;
        case 1:
          timeStr += "一";
          break;
        case 2:
          timeStr += "二";
          break;
        case 3:
          timeStr += "三";
          break;
        case 4:
          timeStr += "四";
          break;
        case 5:
          timeStr += "五";
          break;
        case 6:
          timeStr += "六";
          break;
      }
      if (curHour < 10) {
        if (curMinute < 10) {
          if (curSec < 10) {
            timeStr += " 0" + curHour + ":0" + curMinute + ":0" + curSec;
          } else {
            timeStr += " 0" + curHour + ":0" + curMinute + ":" + curSec;
          }
        } else {
          if (curSec < 10) {
            timeStr += " 0" + curHour + ":" + curMinute + ":0" + curSec;
          } else {
            timeStr += " 0" + curHour + ":" + curMinute + ":" + curSec;
          }
        }
      } else {
        if (curMinute < 10) {
          if (curSec < 10) {
            timeStr += " " + curHour + ":0" + curMinute + ":0" + curSec;
          } else {
            timeStr += " " + curHour + ":0" + curMinute + ":" + curSec;
          }
        } else {
          if (curSec < 10) {
            timeStr += " " + curHour + ":" + curMinute + ":0" + curSec;
          } else {
            timeStr += " " + curHour + ":" + curMinute + ":" + curSec;
          }
        }
      }
      this.curTime = timeStr;
    }
  }
};
</script>
<style>
.chart {
  width: 100%;
  height: 100%;
  background-color: #232747;
}
.chart .title {
  position: relative;
  height: 70px;
  background-color: #232747;
  box-shadow: 5px 5px 5px #1a1313;
  margin: 0px auto 10px auto;
}
.chart .title h6 {
  font-weight: bold;
  background: linear-gradient(to bottom, #d3f2ff, #64c0ff);
  background-clip: text;
  color: transparent;
  font-size: 36px;
  line-height: 70px;
  text-align: center;
}
.curTime {
  position: absolute;
  color: #fff;
  left: 20px;
  top: 42px;
}
.chart .content {
  padding: 0 20px;
  color: #ffffff;
}
.grid-content {
  background: #1b1e39;
  border-radius: 3px;
  margin-top: 10px;
  border: 2px solid #30304d;
}
.liebiao ul li span {
  color: #cb9a15;
  padding: 3px;
  font-size: 15px;
}
</style>
