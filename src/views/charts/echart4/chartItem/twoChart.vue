<template>
  <div class="twoChart">
    <div class="tlt">运行状态</div>
    <div id="twoEcharts" :style="{ width: '100%', height: '300px' }" />
  </div>
</template>

<script>
// import echarts from "echarts";
// require("echarts/theme/macarons"); // echarts theme

export default {
  name: "TwoChart",
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
    // 初始化图表
    initChart() {
      var dom = document.getElementById("twoEcharts");
      dom.innerHTML = "";
      function Radar(canvasID, num, w, r, g, b, txt) {
        this.CFG = {
          perDeg: 1
        };
        this.id = canvasID;
        this.deg = 0;
        this.num = num;
        this.width = w;
        this.r = r;
        this.g = g;
        this.b = b;
        this.txt = txt;
        this.init();
      }
      Radar.prototype.init = function() {
        this.odiv = document.createElement("div");
        this.canvas = document.createElement("canvas");
        this.rect = document.createElement("p");
        this.odiv.className = "rect_box";
        this.odiv.style.width = "33.3%";
        this.odiv.style.height = this.width + 40 + "px";
        this.odiv.style.marginTop = "0px";
        this.odiv.style.marginBottom = "0px";
        this.odiv.style.float = "left";
        this.rect.className = "rect_p";
        this.rect.style.width = this.width + "px";
        this.rect.style.height = "26px";
        this.rect.style.lineHeight = "26px";
        this.rect.style.textAlign = "center";
        this.rect.style.border = "2px solid #186fbd";
        // this.rect.style.margin = "3px";
        this.rect.style.background = "rgb(29, 44, 106)";
        this.rect.innerHTML = this.txt;
        this.canvas.width = this.width;
        this.canvas.height = this.width;
        this.canvas.id = this.id;
        this.odiv.appendChild(this.canvas);
        this.odiv.appendChild(this.rect);
        dom.appendChild(this.odiv);
        this.can = this.canvas;
        this.ctx = this.can.getContext("2d");
        this.ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},1)`;
        window.requestAnimationFrame(this.loop.bind(this));
      };
      Radar.prototype.loop = function() {
        this.deg = this.deg + this.CFG.perDeg;
        if (this.deg > 628) {
          this.deg = 0;
        }
        this.drawRadar(this.deg);
        window.requestAnimationFrame(this.loop.bind(this));
      };
      Radar.prototype.drawPosLine = function() {
        this.ctx.beginPath();
        this.ctx.arc(150, 150, 130, 0, (Math.PI / 180) * 45, false);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.37,
          (Math.PI / 180) * 5,
          (Math.PI / 180) * 40,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.43,
          (Math.PI / 180) * 95,
          (Math.PI / 180) * 140,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.37,
          (Math.PI / 180) * 100,
          (Math.PI / 180) * 135,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.43,
          (Math.PI / 180) * 185,
          (Math.PI / 180) * 230,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.37,
          (Math.PI / 180) * 190,
          (Math.PI / 180) * 225,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.43,
          (Math.PI / 180) * 275,
          (Math.PI / 180) * 320,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.37,
          (Math.PI / 180) * 280,
          (Math.PI / 180) * 315,
          false
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.43,
          (Math.PI / 180) * 5,
          (Math.PI / 180) * 40,
          false
        );
        this.ctx.stroke();

        this.ctx.moveTo(this.width / 2, this.width / 2);
        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.49,
          0 * Math.PI,
          2 * Math.PI
        );
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.moveTo(this.width / 2, this.width / 2);
        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.3,
          0 * Math.PI,
          2 * Math.PI
        );
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.moveTo(this.width / 2, this.width / 2);
        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.167,
          0 * Math.PI,
          2 * Math.PI
        );
        this.ctx.closePath();
        this.ctx.stroke();

        this.ctx.moveTo(this.width / 2, this.width / 2);
        this.ctx.beginPath();
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.1,
          0 * Math.PI,
          2 * Math.PI
        );
        this.ctx.closePath();
        this.ctx.stroke();
      };
      Radar.prototype.drawRadar = function(iDeg) {
        this.ctx.clearRect(0, 0, this.width, this.width);
        this.ctx.fillStyle = "rgba(0,0,0,0)";
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width * 0.48,
          0,
          2 * Math.PI
        );
        this.ctx.fill();
        this.drawPosLine();
        this.ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},0.3)`;
        this.ctx.beginPath();
        this.ctx.moveTo(this.width / 2, this.width / 2);
        this.ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width / 2,
          iDeg * 0.01,
          Math.PI * this.num + iDeg * 0.01,
          false
        );
        this.ctx.closePath();
        this.ctx.fill();
      };
      const suijijiaodu = [
        {
          z: "刻录中",
          c: ["16", "288", "254"]
        },
        {
          z: "读取中",
          c: ["253", "178", "17"]
        },
        {
          z: "空闲中",
          c: ["202", "103", "253"]
        },
        {
          z: "检测中",
          c: ["244", "60", "99"]
        }
      ];
      for (let i = 1; i <= 6; i++) {
        let maxNum = 3,
          minNum = 0;
        let num = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        new Radar(
          "can0" + i,
          (Math.random() * 2).toFixed(1),
          100,
          suijijiaodu[num].c[0],
          suijijiaodu[num].c[1],
          suijijiaodu[num].c[2],
          suijijiaodu[num].z
        );
      }
    }
  }
};
</script>
<style>
#twoEcharts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
#twoEcharts:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.tlt {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding-left: 24px;
}
/* .rect_box{
  margin-left: calc((100% - 100px));
} */
.rect_p {
  border-radius: 10px;
  margin: 3px auto;
  box-sizing: content-box;
  font-weight: bold;
}
</style>
