/**
 * @name 风场信息详情
 * @author 李万金
 * @date 2020年11月9日13:29:10
 * */
import React, {Component} from 'react';
import { Form, Input, Button, Space  } from 'antd';
/*import $ from '../../../../api/axios'*/

class  WindInfoDetail extends Component {
  state = {
    defaultValue:null,
    value:1
  };
  componentDidMount() {
    this.setState({
      defaultValue: this.props.detailData
    });
  }
  onFinish = (params) => {
    console.log(params)
    this.props.cancel();
  };

  render() {
    const { defaultValue } = this.state;
    return (<div>
      {
        defaultValue?(
          <Form name="nest-messages" labelCol={{ span: 4 }}  initialValues={defaultValue} onFinish={this.onFinish} >
            <Form.Item label={'风场编号'} name="accountName" >
              <Input placeholder='请输入风场编号' />
            </Form.Item>
            <Form.Item label={'风场名称'} name="accountName" >
              <Input placeholder='请输入风场名称' />
            </Form.Item>
            <Form.Item label={'风场地址'} name="accountName" >
              <Input placeholder='请输入风场地址' />
            </Form.Item>
            <Form.Item label={'风场简介'} name="accountName" >
              <Input.TextArea maxLength={512} placeholder='请输入风场简介' />
            </Form.Item>
            <Form.Item className='textAlign' wrapperCol={{ span: 24 }}>
              <Space>
                <Button type="primary" htmlType="submit"> 保存 </Button>
                <Button onClick={()=>this.props.cancel()} > 关闭 </Button>
              </Space>
            </Form.Item>
          </Form>
        ):null
      }
    </div>)
  }
}

export default WindInfoDetail
