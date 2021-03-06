/**
 * @name 风场信息
 * @author 李万金
 * @date 2020年11月9日13:22:45
 * */
import React, {Component} from 'react';
import wrapAnimation from "@/utils/wrapAnimation";
import WindInfoDetail from "./components/detail";
import Dialog from "@/components/dialog/dialog";
import TheTable from '@/components/TheTable/TheTable'
import { Form, Input, Button, Space, Pagination  } from 'antd';
/*import $ from '@/api/axios'*/

class WindInfo extends Component {
  state = {
    tableData: [{key:1,status:1}],
    total: 0,
    dialogStatus: 0,//0 不显示 1 新增 2编辑 3查看
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
  add = ()=>{
    this.setState({
      dialogStatus: 1,
      detailData: null
    })
  };
  check = (data)=>{
    this.setState({
      dialogStatus: 3,
      detailData: data
    })
  };
  editor = (data)=>{
    this.setState({
      dialogStatus: 2,
      detailData: data
    })
  };
  cancel = ()=>{
    this.setState({
      dialogStatus: 0
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
        dataIndex: 'companyType',
      },
      {
        title: '风场名称',
        dataIndex: 'baseInfoId',
      },

      {
        title: '风机数量',
        dataIndex: 'companyName',
      },
      {
        title: '操作',
        width:200,
        render: (e) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>this.check(e)} size={'small'}> 查看 </Button>
            <Button type="primary" onClick={()=>this.editor(e)} size={'small'}> 编辑 </Button>
          </Space>
        )
      },
    ];
    return (<div className={'container'}>
      <div  className={'search-box'}>
        <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
          <Form.Item label={'风机编号'} name="accountName" >
            <Input placeholder='请输入风机编号' />
          </Form.Item>
          <Form.Item label={'风场名称'} name="companyName" >
            <Input placeholder='请输入风场名称' />
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
      <Dialog title="风场信息" status={dialogStatus>0} cancel={()=>this.setState({dialogStatus: 0})}>
        <WindInfoDetail dialogStatus={dialogStatus} cancel={this.cancel} detailData={detailData} />
      </Dialog>
    </div>)
  }
}
export default wrapAnimation(WindInfo)

