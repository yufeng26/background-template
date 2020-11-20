<template>
  <div class="liebiao">
    <h5>下属法院数据情况</h5>
    <ul>
      <li v-for="(item, index) in list1" :key="index" v-html="item"></li>
    </ul>
    <ul>
      <li v-for="(item, index) in list2" :key="index" v-html="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "liebiao",
  data() {
    return {
      list1: [
        "杨浦区人民法院<span>27</span>条",
        "黄浦区人民法院<span>64</span>条",
        "嘉定区法院南翔法庭<span>12</span>条",
        "崇明县人民法院<span>27</span>条",
        "宝山区人民法院泗塘法庭<span>64</span>条",
        "嘉定区人民法院徐行人民法庭<span>12</span>条",
        "青浦区人民法院<span>12</span>条"
      ],
      list2: [
        "杨浦区人民法院<span>27</span>条",
        "黄浦区人民法院<span>64</span>条",
        "嘉定区法院南翔法庭<span>12</span>条",
        "崇明县人民法院<span>27</span>条",
        "宝山区人民法院泗塘法庭<span>64</span>条",
        "嘉定区人民法院徐行人民法庭<span>12</span>条",
        "青浦区人民法院<span>12</span>条"
      ]
    };
  },
  mounted() {
    this.initChart();
    this.timer = setInterval(this.initChart, 40000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 产生随机数
    prodshuzi(maxNum, minNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    },
    initChart() {
      this.list1 = this.list2 = [
        `杨浦区人民法院<span>${this.prodshuzi(10, 99)}</span>条`,
        `黄浦区人民法院<span>${this.prodshuzi(10, 99)}</span>条`,
        `嘉定区法院南翔法庭<span>${this.prodshuzi(10, 99)}</span>条`,
        `崇明县人民法院<span>${this.prodshuzi(10, 99)}</span>条`,
        `宝山区人民法院泗塘法庭<span>${this.prodshuzi(10, 99)}</span>条`,
        `嘉定区人民法院徐行人民法庭<span>${this.prodshuzi(10, 99)}</span>条`,
        `青浦区人民法院<span>${this.prodshuzi(10, 99)}</span>条`
      ];
    }
  }
};
</script>

<style scoped>
.liebiao {
  text-align: left;
  padding: 20px 5px;
  overflow: hidden;
  height: 340px;
}
.liebiao h5 {
  line-height: 50px;
  font-size: 14px;
  color: aliceblue;
  padding-left: 24px;
  margin: 0;
}
.liebiao ul {
  margin: 0 auto;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  list-style: none;
  line-height: 36px;
  font-size: 14px;
  float: left;
  width: 50%;
}
.liebiao ul li {
  position: relative;
  padding-left: 20px;
}

.liebiao ul li::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-5px);
  left: 0px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6563aa;
}
</style>
