<template>
  <div class="shArea" :style="{ width: '100%', height: '655px' }">
    <div id="shArea" :style="{ width: '100%', height: '655px' }"></div>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
    <span><i></i><i></i><i></i></span>
  </div>
</template>

<script>
import geoJson from "./ShangHai.json";
// require("echarts/theme/macarons"); // echarts theme
console.log(geoJson);
export default {
  name: "shArea",
  data() {
    return {
      chart: "linkToHelloWorld"
    };
  },
  mounted() {
    this.initChart();
    this.timer = setInterval(this.initChart, 10000);
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
      var dom = document.getElementById("shArea");
      var myChart = this.echarts.init(dom);
      this.echarts.registerMap("ShangHai", geoJson);
      // var data = [{ name: "崇明区", value: 33 }];
      // var geoCoordMap = {
      //   崇明区: [121.5637, 31.5383]
      // };
      // var convertData = function(data) {
      //   var res = [];
      //   for (var i = 0; i < data.length; i++) {
      //     var geoCoord = geoCoordMap[data[i].name];
      //     if (geoCoord) {
      //       res.push({
      //         name: data[i].name,
      //         value: geoCoord.concat(data[i].value)
      //       });
      //     }
      //   }
      //   return res;
      // };
      // 绘制图表
      myChart.setOption({
        title: {
          text: "上海市16区法院分布图 （2020.4）",
          textStyle: { color: "#fff" },
          left: 20,
          top: 10
          // subtext: "数据来自http://datav.aliyun.com/"
        },
        bmap: {},
        series: [
          {
            name: "",
            nameProperty: "name",
            type: "map",
            mapType: "ShangHai", // 自定义扩展图表类型
            emphasis: {
              itemStyle: {
                areaColor: "#1362ac"
              }
            },
            itemStyle: {
              areaColor: "#1e2353",
              borderColor: "#6c15b1",
              shadowOffsetX: 1,
              shadowOffsetY: 1,
              shadowColor: "rgba(0, 0, 0, 0.5)",
              shadowBlur: 5
            },
            coordinateSystem: "bmap",
            data: [{ name: "崇明区", value: 33, tooltip: {} }],
            symbolSize: function(val) {
              return val[2] / 10;
            },
            encode: {
              value: 2
            },
            nameMap: {
              崇明区: "崇明区"
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            zlevel: 1
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.shArea {
  position: relative;
}
.shArea span {
  position: absolute;
  color: aliceblue;
  height: 10px;
}
.shArea span::after {
  content: "";
  width: 140px;
  position: absolute;
  top: -3px;
  left: 10px;
}
.shArea span i {
  position: absolute;
  left: 0%;
  top: 50%;
  width: 2px;
  height: 2px;
  background: aqua;
  margin-left: -1px;
  margin-top: -1px;
  border-radius: 50%;
  animation: bowen 1.5s ease 0s infinite running;
}
.shArea span i:nth-child(2) {
  animation: bowen 1.5s ease -0.25s infinite running;
}
.shArea span i:nth-child(3) {
  animation: bowen 1.5s ease -0.45s infinite running;
}
.shArea span:hover i {
  -webkit-animation-play-state: running;
}
@-webkit-keyframes bowen {
  0% {
    width: 1px;
    height: 1px;
    opacity: 1;
  }
  100% {
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px;
    opacity: 0;
  }
}
.shArea span:nth-child(2)::after {
  content: "崇明县法院海岛法庭";
}
.shArea span:nth-child(3)::after {
  content: "宝山区人民法院";
  top: -30px;
  left: -10px;
}
.shArea span:nth-child(4)::after {
  content: "嘉定区人民法院";
  left: -140px;
}
.shArea span:nth-child(5)::after {
  content: "静安区人民法院";
  left: 5px;
}
.shArea span:nth-child(6)::after {
  content: "虹口区人民法院";
  top: -20px;
}
.shArea span:nth-child(7)::after {
  content: "普陀区人民法院";
  left: -140px;
}
.shArea span:nth-child(8)::after {
  content: "长宁区人民法院";
  left: -140px;
}
.shArea span:nth-child(9)::after {
  content: "黄埔区人民法院";
}
.shArea span:nth-child(10)::after {
  content: "青浦区朱家角人民法庭";
  left: -160px;
}
.shArea span:nth-child(11)::after {
  content: "徐汇区人民法院";
  top: 20px;
  left: -70px;
}
.shArea span:nth-child(12)::after {
  content: "浦东新区人民法院";
}
.shArea span:nth-child(13)::after {
  content: "松江区人民法院";
  left: -140px;
}
.shArea span:nth-child(14)::after {
  content: "闵行区人民法院";
}
.shArea span:nth-child(15)::after {
  content: "奉贤区人民法院";
}
.shArea span:nth-child(16)::after {
  content: "金山区人民法院";
}
.shArea span:nth-child(2) {
  top: 28%;
  left: 50%;
}
.shArea span:nth-child(3) {
  top: 42.5%;
  left: 43.5%;
}
.shArea span:nth-child(4) {
  top: 43%;
  left: 36%;
}
.shArea span:nth-child(5) {
  top: 49.77099%;
  left: 45.91317%;
}
.shArea span:nth-child(6) {
  top: 47.854961%;
  left: 49.206587%;
}
.shArea span:nth-child(7) {
  top: 51.381679%;
  left: 43.26826%;
}
.shArea span:nth-child(8) {
  top: 53.8931297%;
  left: 46.7065%;
}
.shArea span:nth-child(9) {
  top: 53.43511%;
  left: 46.706%;
}
.shArea span:nth-child(10) {
  top: 56.488549%;
  left: 30.99401%;
}
.shArea span:nth-child(11) {
  top: 56.488549%;
  left: 45.0119%;
}
.shArea span:nth-child(12) {
  top: 58.0152%;
  left: 57.9281437%;
}
.shArea span:nth-child(13) {
  top: 66.3712%;
  left: 35.6564%;
}
.shArea span:nth-child(14) {
  top: 62.874%;
  left: 45.343%;
}
.shArea span:nth-child(15) {
  top: 74.809%;
  left: 51.45%;
}
.shArea span:nth-child(16) {
  top: 80.91%;
  left: 38.47%;
}
</style>
