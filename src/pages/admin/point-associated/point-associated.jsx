/**
 * @name 主要测点关联
 * @author 李万金
 * @date 2020年11月9日13:22:45
 * */
import React, {Component} from 'react';
import wrapAnimation from "@/utils/wrapAnimation";
import TheTable from '@/components/TheTable/TheTable'
import { Form, Input, Button, Space, Pagination, Popconfirm, Select } from 'antd';
/*import $ from '@/api/axios'*/

class PointAssociated extends Component {
  state = {
    tableData: [{key:1,status:1}],
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
    setTimeout(()=>{
      this.getData({...this.state.page});
    },2000)
  }

  getData = (data) => {
    this.setState({
      loading: false
    })
  };
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
      loading,
      total
    } = this.state;
    const columns = [
      {
        title: '编号',
        render:(text, record, index) => (<span>{index+1}</span>)
      },
      {
        title: '测点名称',
        dataIndex: 'companyType',
      },
      {
        title: '测点编号',
        dataIndex: 'baseInfoId',
      },

      {
        title: '关联状态',
        dataIndex: 'companyName',
      },
      {
        title: '操作',
        width:200,
        render: (e) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>this.check(e)} size={'small'}> 查看 </Button>
            <Button type="primary" onClick={()=>this.check(e)} size={'small'}> 编辑 </Button>
            <Popconfirm
              title={`确定要${e.status}该测点吗？`}
              onConfirm={this.confirm}
              okText="确定"
              cancelText="取消">
              <Button type="primary"  size={'small'}> 关联 </Button>
            </Popconfirm>
          </Space>
        )
      },
    ];
    return (<div className={'container'}>
      <div  className={'search-box'}>
        <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
          <Form.Item label={'测点名称'} name="companyName" >
            <Input placeholder='请输入测点名称' />
          </Form.Item>
          <Form.Item label={'测点编号'} name="accountName" >
            <Input placeholder='请输入测点编号' />
          </Form.Item>
          <Form.Item name="baseInfoId" label="关联状态" >
            <Select placeholder='请选择关联状态'>
              <Select.Option value=''>全部</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" >查询</Button>
              <Button type="primary" >新增</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
      <div className={'table-box'}>
        <TheTable loading={loading} tableData={tableData} columns={columns} />
      </div>
      <div className='page-box'>
        <Pagination total={total} defaultCurrent={1} position={['bottomCenter','bottomCenter']} onChange={this.pageChange} />
      </div>
    </div>)
  }
}

export default wrapAnimation(PointAssociated)
const styleData = {
  selectStyle:{
    width:'170px'
  },
  searchStyle:{
    padding:15,
    backgroundColor:'#fff',
    marginBottom:15
  }
};
