

import React, {Component} from 'react';
import { Form, Input, Button, Select, Radio, Space, Transfer } from 'antd';
/*import $ from '../../../../api/axios'*/
class BJAreaDetail extends Component {
  state = {
    defaultValue:null,
    radioStatus: 1,
    status:false,
    targetKeys:[],
    selectedKeys:[],
    mockData:[{
      key: 1,
      title: `待选风机1`,
      disabled: false,
    }]
  };
  componentDidMount() {
    this.refs.form.setFieldsValue(this.props.detailData);
    this.setState({
      status: this.props.dialogStatus>2,
    });
  }
  onFinish = (params) => {
    this.props.cancel();
  };
  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  render() {
    const { defaultValue, radioStatus, status , targetKeys, selectedKeys, mockData } = this.state;
    return (<div>
      {
        <Form name="nest-messages" ref='form' labelCol={{ span: 5 }}  onFinish={this.onFinish} >
          <Form.Item name="baseInfoId" rules={[{
            required: true,
            message: '请选择风场名称',
          }]} label="风场名称" >
            <Select disabled={status} placeholder='请选择风场名称'>
              <Select.Option value=''>全部</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={'风场编号'} rules={[{
            required: true,
            message: '请输入风场编号',
          }]} name="accountName" >
            <Input disabled={status} placeholder='请输入风场编号' />
          </Form.Item>
          <Form.Item label={'风场地址'} rules={[{
            required: true,
            message: '请输入风场地址',
          }]} name="accountName" >
            <Input disabled={status} placeholder='请输入风场地址' />
          </Form.Item>
          <Form.Item label={'关联名称'} rules={[{
            required: true,
            message: '请输入关联名称',
          }]} name="status" >
            <Input disabled={status} placeholder='请输入关联名称' />
          </Form.Item>
          <Form.Item label={'风机区域关联'} rules={[{
            required: true,
            message: '请选择风机区域关联',
          }]} name="accountName" >
            <Transfer
              dataSource={mockData}
              titles={['待选', '已选']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={this.handleChange}
              onSelectChange={this.handleSelectChange}
              onScroll={this.handleScroll}
              render={item => item.title}
              disabled={status}
              style={{ marginBottom: 16 }}
            />
          </Form.Item>
          <Form.Item rules={[{
            required: true,
            message: '请输入关联名称',
          }]} label={'状态'} name="status" >
            <Radio.Group value={radioStatus} disabled={status}>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>停用</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className='textAlign' wrapperCol={{ span: 24 }}>
            <Space>
              {
                !status?<Button type="primary"  htmlType="submit"> 保存 </Button>:null
              }
              <Button onClick={()=>this.props.cancel()} > 关闭 </Button>
            </Space>
          </Form.Item>
        </Form>
      }
    </div>)
  }
}

export default BJAreaDetail
