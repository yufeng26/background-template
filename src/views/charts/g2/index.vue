<template>
  <div class="page">
    <basic-container>
      <div id="container">G2图表</div>
    </basic-container>
  </div>
</template> 
<script>
import * as G2 from "@antv/g2";
export default {
  name: "G2",
  data() {
    return {
      msg: "电子库房智能化平台",
    };
  },
  mounted() {
    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 },
    ];
    // Step 1: 创建 Chart 对象
    const chart = new G2.Chart({
      container: "container", // 指定图表容器 ID
      width: 800, // 指定图表宽度
      height: 400, // 指定图表高度
    });

    // Step 2: 载入数据源
    chart.data(data);

    // Step 3：创建图形语法，绘制柱状图
    chart.interval().position("genre*sold").color("genre");
    chart.tooltip({
      showMarkers: false, // 不展示 tooltip markers
    });
    chart.interaction("active-region"); // 使用 active-region 交互行为
    // Step 4: 渲染图表
    chart.render();
  },
};
</script>
