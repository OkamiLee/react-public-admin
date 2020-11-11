import React, {Component} from 'react';
import echarts from 'ECharts';
import {Card } from 'antd'
class HomeBar extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('barChart'));
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      color:['#f96868'],
      xAxis: {
        data: ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10"]
      },
      yAxis: {},
      series: [{
        name: '新增',
        type: 'bar',
        data: [51, 204, 362, 478, 234, 156, 362, 478, 50, 49]
      }]
    });
  }
  render() {
    return  <Card title="新增用户数量" bordered={false} style={{ width: '45%' }}>
              <div id="barChart" style={{ width:'90%', height: 400 }}/>
            </Card>
  }
}

export default HomeBar
