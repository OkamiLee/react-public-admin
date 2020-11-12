/**
 * @name 风机信息
 * @author 李万金
 * @date 2020年11月9日13:22:45
 * */
import React, {Component} from 'react';
import wrapAnimation from "@/utils/wrapAnimation";
import BlowerInfoDetail from "./components/detail";
import Dialog from "@/components/dialog/dialog";
import TheTable from '@/components/TheTable/TheTable'
import { Form, Input, Button, Space, Popconfirm, Select, Pagination  } from 'antd';
/*import $ from '@/api/axios'*/

class BlowerInfo extends Component {
  state = {
    tableData: [{key:1,status:1}],
    total: 0,
    dialogStatus: 0,
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
  add = ()=>{
    this.setState({
      dialogStatus: 1,
      detailData: null
    })
  };
  add = (data)=>{
    this.setState({
      dialogStatus: 1,
      detailData: {status:1}
    })
  };
  editor = (data)=>{
    this.setState({
      dialogStatus: 2,
      detailData: data
    })
  };
  check = (data)=>{
    this.setState({
      dialogStatus: 3,
      detailData: data
    })
  };
  cancel = ()=>{
    this.setState({
      dialogStatus: 0
    });
  };
  confirm = () =>{
    alert('停启用')
  }
  render() {
    const {
      tableData,
      dialogStatus,
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
        title: '风机名称',
        dataIndex: 'companyType',
      },
      {
        title: '风场名称',
        dataIndex: 'baseInfoId',
      },

      {
        title: '设备型号',
        dataIndex: 'companyName',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '操作',
        width:200,
        render: (e) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>this.check(e)} size={'small'}> 查看 </Button>
            <Button type="primary" onClick={()=>this.editor(e)} size={'small'}> 编辑 </Button>
            <Popconfirm
              title={`确定要${e.status}该设备吗？`}
              onConfirm={this.confirm}
              okText="确定"
              cancelText="取消">
                <Button type="primary"  size={'small'}> 停用 </Button>
            </Popconfirm>
          </Space>
        )
      },
    ];
    return (<div className={'container'}>
      <div  className={'search-box'}>
        <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
          <Form.Item label={'设备名称'} name="companyName" >
            <Input placeholder='请输入设备名称' />
          </Form.Item>
          <Form.Item label={'风场名称'} name="accountName" >
            <Select style={styleData.selectStyle} placeholder='请选择风场名称'>
              <Select.Option value=''>全部</Select.Option>
             </Select>
          </Form.Item>
          <Form.Item label={'设备型号'} name="accountName" >
            <Select style={styleData.selectStyle} placeholder='请选择设备型号'>
              <Select.Option value=''>全部</Select.Option>
             </Select>
          </Form.Item>
          <Form.Item label={'停启状态'} name="accountName" >
            <Select style={styleData.selectStyle} placeholder='请选择停启状态'>
              <Select.Option value=''>全部</Select.Option>
              <Select.Option value='1'>停用</Select.Option>
              <Select.Option value='2'>启用</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" >查询</Button>
              <Button type="primary" onClick={this.add} >新增</Button>
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
      <Dialog title="风机信息" status={dialogStatus} cancel={()=>this.setState({dialogStatus: 0})}>
        <BlowerInfoDetail cancel={this.cancel} dialogStatus={dialogStatus} detailData={detailData} />
      </Dialog>
    </div>)
  }
}

export default wrapAnimation(BlowerInfo)
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
