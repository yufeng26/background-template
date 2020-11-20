<template>
  <div id="oneEcharts" :style="{ width: '100%', height: '300px' }" />
</template>

<script>
// import echarts from "echarts";
// require("echarts/theme/macarons"); // echarts theme

export default {
  name: "OneChart",
  data() {
    return {
      chart: "linkToHelloWorld"
    };
  },
  mounted() {
    this.initChart();
    this.timer = setInterval(this.initChart, 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 产生随机数
    prodshuzi(maxNum, minNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    },
    // 初始化图表
    initChart() {
      var dom = document.getElementById("oneEcharts");
      var myChart = this.echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        color: ["#3cc5a3", "#ffc000", "#5cdbf2"],
        title: {
          text: "接收数据",
          textStyle: {
            color: "#fff",
            left: "left",
            fontSize: 14
          },
          left: 20,
          top: 10
        },
        legend: {
          data: ["包数量", "条目数量", "电子全文"],
          textStyle: {
            color: "#fff"
          },
          top: 10,
          right: 20
        },
        tooltip: {
          show: true,
          // type: "category",
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: "rgba(150,150,150,0.3)"
          }
        },
        xAxis: {
          type: "category",
          data: ["2016", "2017", "2018", "2019", "2020"],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          name: "年度",
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            nameGap: 5
          }
        },
        yAxis: {
          type: "value",
          name: "数量",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#595e7f"
            }
          }
        },
        grid: [{ bottom: 40 }, { top: 50 }, { left: 30 }, { right: 30 }],
        series: [
          {
            name: "包数量",
            type: "bar",
            barWidth: 8,
            data: [
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000)
            ],
            itemStyle: { barBorderRadius: 10 }
          },
          {
            name: "条目数量",
            type: "bar",
            barWidth: 8,
            data: [
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000)
            ],
            itemStyle: { barBorderRadius: 10 }
          },
          {
            name: "电子全文",
            type: "bar",
            barWidth: 8,
            data: [
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000)
            ],
            itemStyle: { barBorderRadius: 10 }
          }
        ]
      });
    }
  }
};
</script>
