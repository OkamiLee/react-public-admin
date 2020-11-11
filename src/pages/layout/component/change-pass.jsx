import React, {Component} from 'react';
import { Form, Input, Button, Space} from 'antd';
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
class ChangePass extends Component {
  formRef = React.createRef();
  validatorHandel = (rule, value, callback)=>{
    const form = this.formRef.current.getFieldValue('password');
    if (form !== value){
      callback('两次输入密码不一致')
    }else{
      callback();
    }
  };
  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div>
        <Form
          {...layout}
          name="basic"
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}>
          <Form.Item
            label="旧密码"
            name="username"
            rules={[{ required: true, message: '请输入旧密码' },{pattern:/^[0-9a-zA-Z]{6,20}$/,message: '密码为6-20位字母数字下划线组合字符'}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="新密码"
            name="password"
            rules={[{ required: true, message: '请输入新密码' },{pattern:/^[0-9a-zA-Z]{6,20}$/,message: '密码为6-20位字母数字下划线组合字符'}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="password2"
            rules={[{ required: true, message: '请确认密码' },{validator:this.validatorHandel}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item style={{textAlign:'center'}} wrapperCol={{ span: 24, offset: 0 }}>
            <Space size="middle">
              <Button type="primary" htmlType="submit"> 确定 </Button>
              <Button  onClick={this.props.cancel}> 取消 </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ChangePass;
