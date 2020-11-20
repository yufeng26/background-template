<template>
  <div id="sixEcharts" :style="{ width: '100%', height: '300px' }" />
</template>

<script>
// import echarts from "echarts";
// require("echarts/theme/macarons"); // echarts theme

export default {
  name: "SixChart",
  data() {
    return {
      chart: "linkToHelloWorld"
    };
  },
  mounted() {
    this.initChart();
    this.timer = setInterval(this.initChart, 50000);
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
      var dom = document.getElementById("sixEcharts");
      var myChart = this.echarts.init(dom);
      var cursuiji = this.prodshuzi(10, 100);
      var option = {
        title: {
          text: "容量统计",
          textStyle: {
            color: "#fff",
            left: "left",
            fontSize: 14
          },
          top: 10,
          left: 20
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#3cc5a3", "#ffc000", "#61a0a9", "#d58164", "#91c8ae"],
        legend: {
          // orient: "vertical",
          left: "center",
          data: ["已使用", "未使用"],
          textStyle: {
            color: "#fff"
          },
          top: 10
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "56%"],
            selectedMode: "single",
            avoidLabelOverlap: false,
            hoverAnimation: true,
            hoverOffset: 8,
            selectedOffset: 6,
            label: {
              show: true,
              fontSize: "16",
              fontWeight: "bold",
              formatter: "{b}:({d}%)"
            },
            data: [
              { value: cursuiji, name: "已使用" },
              { value: 100 - cursuiji, name: "未使用" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["32%", "34%"],
            avoidLabelOverlap: false,
            hoverAnimation: true,
            hoverOffset: 0,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: cursuiji,
                name: "已使用",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#3cc5a3" } // 鼠标移入颜色
                }
              },
              {
                value: 100 - cursuiji,
                name: "未使用",
                itemStyle: {
                  normal: { color: "#414160" }, // 正常颜色
                  emphasis: { color: "#ffc000" } // 鼠标移入颜色
                }
              }
            ]
          }
        ]
      };
      // 绘制图表
      myChart.setOption(option);
      myChart.on("mouseover", function(params) {
        console.log(params);
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 1,
          dataIndex: params.dataIndex
        });
        option.series[0].data[params.dataIndex].selected = true;
        // myChart.clear();
        myChart.setOption(option);
      });
      myChart.on("mouseout", function(params) {
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 1,
          dataIndex: params.dataIndex
        });
        option.series[0].data[params.dataIndex].selected = false;
        // myChart.clear();
        myChart.setOption(option);
      });
    }
  }
};
</script>
