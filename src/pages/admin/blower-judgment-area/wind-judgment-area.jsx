/**
 * @name 风机判断区域-风场
 * @author 李万金
 * @date 2020年11月9日13:22:37
 * */
import React, {Component} from 'react';
import wrapAnimation from "@/utils/wrapAnimation";
import BJAreaDetail from "./components/detail";
import Dialog from "@/components/dialog/dialog";
import TheTable from "@/components/TheTable/TheTable.jsx";
import BJAreaList from './blower-judgment-area'
import { Form, Input, Button, Space, Pagination  } from 'antd';
/*import $ from '@/api/axios'*/

class BlowerJudgmentArea extends Component {
  state = {
    tableData: [{key:1}],
    total: 0,
    detailStatus: false,
    detailData:{},
    loading:true,
    page: {
      pageSize: 10,
      pageNumber: 1
    }
  };
  componentDidMount() {
    this.getData({...this.state.page});
  }

  getData = (data) => {
    this.setState({
      loading: false
    })
  };
  getText = ()=>{
    return 'Lee'
  }
  onFinish = values => {
    const data = Object.assign(values, this.state.page);
    this.getData(data);
  };
  pageChange = (page) => {
    this.setState({
      page: Object.assign(this.state.page, {pageNumber: page})
    });
    this.getData(this.state.page);
  };
  check = (data)=>{
    this.setState({
      detailStatus: true,
      detailData: data
    })
  };
  cancel = ()=>{
    this.setState({
      detailStatus: false
    });
  };
  render() {
    const {
      tableData,
      detailStatus,
      detailData,
      loading,
      total
    } = this.state;
    const columns = [
      {
        title: '编号',
        render:(text, record, index) => (<span>{index+1}</span>)
      },
      {
        title: '风场编号',
        dataIndex: 'baseInfoId',
      },
      {
        title: '风场名称',
        dataIndex: 'companyType',
      },
      {
        title: '风机数量',
        dataIndex: 'companyName',
      },
      {
        title: '关联参考组数量',
        dataIndex: 'unifiedIdentificationCode',
      },
      {
        title: '操作',
        width:200,
        render: (e) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>this.check(e)} size={'small'}> 查看 </Button>
          </Space>
        )
      },
    ];
    return (<div className={'container'}>
      <div  className={'search-box'}>
        <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
          <Form.Item label={'风场编号'} name="accountName" >
            <Input placeholder='请输入风场编号' />
          </Form.Item>
          <Form.Item label={'风场名称'} name="companyName" >
            <Input placeholder='请输入风场名称' />
          </Form.Item>
          <Form.Item shouldUpdate={true}>
            {() => (
              <Button type="primary" htmlType="submit" >查询</Button>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className={'table-box'}>
        <TheTable loading={loading} tableData={tableData} columns={columns} />
      </div>
      <div className='page-box'>
        <Pagination total={total} defaultCurrent={1} position={['bottomCenter','bottomCenter']} onChange={this.pageChange} />
      </div>
      <Dialog width={1100} title="风机判断区域-风机" status={detailStatus} cancel={()=>this.setState({detailStatus: false})}>
        <BJAreaList cancel={this.cancel} detailData={detailData} />
      </Dialog>
    </div>)
  }
}

export default wrapAnimation(BlowerJudgmentArea)
