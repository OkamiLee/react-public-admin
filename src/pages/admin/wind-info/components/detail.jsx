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
    value:1,
    status:false
  };
  componentDidMount() {
    this.setState({
      defaultValue: this.props.detailData,
      status: this.props.dialogStatus > 2
    });
  }
  onFinish = (params) => {
    this.props.cancel();
  };

  render() {
    const { defaultValue, status } = this.state;
    return (<div>
      <Form name="nest-messages" labelCol={{ span: 4 }}  initialValues={defaultValue} onFinish={this.onFinish} >
        <Form.Item label={'风场编号'} name="accountName" >
          <Input placeholder='请输入风场编号' disabled={status} />
        </Form.Item>
        <Form.Item label={'风场名称'} name="accountName" >
          <Input placeholder='请输入风场名称' disabled={status} />
        </Form.Item>
        <Form.Item label={'风场地址'} name="companyName" >
          <Input placeholder='请输入风场地址' disabled={status} />
        </Form.Item>
        <Form.Item label={'风场简介'} name="companyName" >
          <Input.TextArea maxLength={512}  disabled={status} placeholder='请输入风场简介' />
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

export default WindInfoDetail
