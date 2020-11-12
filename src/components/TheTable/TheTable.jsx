/**
 * @name 表格通用组件
 * @author 李万金
 * @date 2020年11月9日13:22:23
 * */

import React, {Component} from 'react';
import { Table, Spin} from 'antd';
export default class TheTable extends Component {
  render() {
    const { loading, columns, tableData, rowSelection } = this.props;
    return <Spin style={{height:'100%'}} spinning={loading} tip="Loading...">
      <Table
        columns={columns}
        style={{height:'100%'}}
        pagination={false}
        rowSelection={rowSelection}
        dataSource={tableData}/>
    </Spin>
  }
}
