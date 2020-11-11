/**
 * @name 地图组件
 * @author 李万金
 * @date 2020年11月9日13:26:32
 * */

import React, {Component} from 'react';
import echarts from 'ECharts';
import geoJson from './data/heilongjiang.json';
import option from "./data/option";
import h from './data/haerbin'
class MapChart extends Component {
  option = option;
  componentDidMount() {
    this.initECharts();
  }
  initECharts() {
    echarts.registerMap('city', h );
    //初始化ECharts实例
    const myChart = echarts.init(document.getElementById('mainMap'));
    myChart.setOption(this.option);

    myChart.on('click',function (params) {
      alert(params.name);
      /*const { dispatch } = this.props;
      dispatch({
          type: 'overview/select',
          payload: params.name,
      })*/
    });
  }



  render() {
    return (
      <div className="App">
        <div id="mainMap" style={{width: '500px', height: '500px'}} />
      </div>
    );
  }



}

export default MapChart;
