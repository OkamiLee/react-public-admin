/**
 * @name 告警信息-测点
 * @author 李万金
 * @date 2020年11月9日13:22:37
 * */
import React, {Component} from 'react';
import WarningDetail from "./components/detail";
import Dialog from "@/components/dialog/dialog";
import TheTable from "@/components/TheTable/TheTable.jsx";
import { Form, Input, Button, Space, Pagination, Select, Popconfirm } from 'antd';
/*import $ from '@/api/axios'*/

class PointWarningInfo extends Component {
  state = {
    tableData: [{key:1,status:1}],
    total: 0,
    dialogStatus: false,
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
  check = (data) => {
    this.setState({
      dialogStatus: 3,
      detailData: data
    })
  };
  confirm = ()=>{
    
  };
  cancel = ()=>{
    this.setState({
      dialogStatus: false
    });
  };
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
        title: '风场编号',
        dataIndex: 'baseInfoId',
      },
      {
        title: '风场名称',
        dataIndex: 'companyType',
      },
      {
        title: '关联名称',
        dataIndex: 'companyName',
      },
      {
        title: '关联风机数量',
        dataIndex: 'unifiedIdentificationCode',
      },
      {
        title: '状态',
        render: (e) => (<span>{e.status===0?'停用':'启用'}</span>)
      },
      {
        title: '操作',
        width:100,
        render: (e) => (<Button type="primary" onClick={()=>this.check(e)} size={'small'}> 查看 </Button>)
      },
    ];
    return (<div className={'container'} style={{height:550}}>
      <div  className={'search-box'}>
        <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
          <Form.Item label={'告警测点名称'} name="companyName" >
            <Input placeholder='请输入告警测点名称' />
          </Form.Item>
          <Form.Item label={'告警类型'} name="accountName" >
            <Select  className='selectWidth' placeholder='请选择告警类型'>
              <Select.Option value=''>全部</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={'请选择告警状态'} name="accountName" >
            <Select  className='selectWidth' placeholder='请选择告警状态'>
              <Select.Option value=''>全部</Select.Option>
              <Select.Option value='1'>停用</Select.Option>
              <Select.Option value='2'>启用</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item shouldUpdate={true}>
            {() => (
              <Space>
                <Button type="primary" htmlType="submit" >查询</Button>
              </Space>
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
      <Dialog width={800} title="告警信息" status={dialogStatus>0} cancel={()=>this.setState({dialogStatus: false})}>
        <WarningDetail cancel={this.cancel}  />
      </Dialog>
    </div>)
  }
}

export default PointWarningInfo

