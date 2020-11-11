/**
 * @name 管理端首页
 * @author 李万金
 * @date 2020年11月9日14:38:40
 * */
import React, {Component} from 'react';
import wrapAnimation from '@/utils/wrapAnimation'
import BarChart from '@/components/barChart/barChart.jsx'
import LineChart from '@/components/LineChart/lineChart.jsx'
import MapChart from "@/components/mapChart/mapChart.jsx";
import './style/style.less'
import {  CommentOutlined } from '@ant-design/icons';
class Home extends Component {
  render() {
    return <div className={'home-wrap'}>
      <ul className={'home-top-box'}>
        <li className={'home-top-item1'}>
          <em><CommentOutlined style={{fontSize:30,color:'#fff'}} /></em>
          <span>123456</span>
        </li>
        <li className={'home-top-item2'}>
          <em><CommentOutlined style={{fontSize:30,color:'#fff'}} /></em>
          <span>123456</span>
        </li>
        <li className={'home-top-item3'}>
          <em><CommentOutlined style={{fontSize:30,color:'#fff'}} /></em>
          <span>123456</span>
        </li>
        <li className={'home-top-item4'}>
          <em><CommentOutlined style={{fontSize:30,color:'#fff'}} /></em>
          <span>123456</span>
        </li>
      </ul>
      <div className={'chart-box'}>
        <BarChart/>
        <LineChart/>
        <MapChart/>
      </div>
    </div>
  }
}

export default wrapAnimation(Home)
