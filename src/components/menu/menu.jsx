/**
 * @name 导航组件
 * @author 李万金
 * @date  2020年11月9日13:25:57
 * */
import React, {Component} from 'react';
import {Menu} from 'antd';
import {
  AppstoreOutlined,
  ControlOutlined,
  RadarChartOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import BlowerMenuIcon from '@/icon/blower-icon'
import WindMenuIcon from '@/icon/wind-icon'
class Menus extends Component {
  render() {
    return <Menu theme="dark"  onClick={this.props.menuChange} mode="inline" >
      <Menu.Item key="/admin/home" icon={<AppstoreOutlined />}>
        首页
      </Menu.Item>
      <Menu.Item icon={<BlowerMenuIcon/>} key="/admin/blower-info" >
        风机信息
      </Menu.Item>
      <Menu.Item icon={<WindMenuIcon/>} key="/admin/wind-info" >
        风场信息
      </Menu.Item>
      <Menu.Item icon={<RadarChartOutlined />} key="/admin/BJ-area" >
        风机判断区域
      </Menu.Item>
      <Menu.Item icon={<ControlOutlined />} key="/admin/point-associated" >
        主要测点管理
      </Menu.Item>
      <Menu.Item icon={<AlertOutlined />} key="/admin/warning-info" >
        告警信息
      </Menu.Item>
    </Menu>
  }
}

export default Menus
