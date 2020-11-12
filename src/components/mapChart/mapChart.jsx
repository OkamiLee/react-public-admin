/**
 * @name 地图组件
 * @author 李万金
 * @date 2020年11月9日13:26:32
 * */
import React, {Component} from 'react';
import echarts from 'ECharts';
import geoJson from './data/heilongjiang.json';
import option from "./data/option";
import axios from '@/api/axios'

class MapChart extends Component {
  option = option;
  componentDidMount() {
    /*axios.get('https://geo.datav.aliyun.com/areas_v2/bound/230100.json').then(res=>{})*/
    echarts.registerMap('city', geoJson);
    this.initECharts();
  }
  initECharts() {

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
      <div className="App" style={{width: '100%', height: '100%'}}>
        <div id="mainMap" style={{width: '100%', height: '100%'}} />
      </div>
    );
  }



}

export default MapChart;
