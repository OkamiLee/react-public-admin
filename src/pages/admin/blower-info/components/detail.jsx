/**
 * @name 风机信息详情
 * @author 李万金
 * @date 2020年11月9日13:29:10
 * */
import React, {Component} from 'react';
import { Form, Input, Button, Select, Radio, Space  } from 'antd';
/*import $ from '../../../../api/axios'*/

class  BlowerInfoDetail extends Component {
  state = {
    defaultValue:null,
    value:1,
    status:false
  };
  componentDidMount() {
    this.refs.form.setFieldsValue(this.props.detailData);
    this.setState({
      status: this.props.dialogStatus > 2
    });
  }
  onFinish = (params) => {
    this.props.cancel();
  };

  render() {
    const { value, status } = this.state;
    return (<div>
      <Form name="nest-messages" labelCol={{ span: 4 }} ref='form'  onFinish={this.onFinish} >
        <Form.Item name="baseInfoId" label="设备编号" >
          <Input placeholder='请输入设备编号' disabled={status} />
        </Form.Item>
        <Form.Item label={'设备名称'} name="accountName" >
          <Input placeholder='请输入设备名称' disabled={status} />
        </Form.Item>
        <Form.Item name="baseInfoId" label="设备型号" >
          <Select placeholder='请选择设备型号' disabled={status}>
            <Select.Option value=''>全部</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="baseInfoId" label="风场名称" >
          <Select placeholder='请选择风场名称' disabled={status}>
            <Select.Option value=''>全部</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={'安装坐标'} name="accountName" >
          <Input placeholder='请输入安装坐标' disabled={status} />
        </Form.Item>
        <Form.Item label={'状态'} name="status" >
          <Radio.Group value={value} disabled={status}>
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
    </div>)
  }
}

export default BlowerInfoDetail
