<template>
  <div id="fiveEcharts" :style="{ width: '100%', height: '300px' }"></div>
</template>

<script>
export default {
  name: "FiveChart",
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
      var dom = document.getElementById("fiveEcharts");
      var myChart = this.echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        color: ["#3cc5a3", "#ffc000", "#5cdbf2"],
        title: {
          text: "数据分类统计",
          textStyle: {
            color: "#fff",
            left: "left",
            fontSize: 14
          },
          fontSize: 12,
          left: 20,
          top: 15
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: "rgba(150,150,150,0.3)"
          }
        },
        xAxis: {
          type: "category",
          data: [
            "明清卷",
            "民国卷",
            "革命历史",
            "建国后",
            "科技卷",
            "专业卷",
            "照片卷",
            "录像卷"
          ],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
          // name: "年度",
          // nameTextStyle: {
          //   color: "#fff",
          //   fontSize: 12,
          //   nameGap: 5,
          // },
        },
        yAxis: {
          type: "value",
          // name: "数量",
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
            type: "bar",
            data: [
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000),
              this.prodshuzi(50, 1000)
            ],
            barWidth: 16,
            itemStyle: { barBorderRadius: 10 }
          }
        ]
      });
    }
  }
};
</script>
