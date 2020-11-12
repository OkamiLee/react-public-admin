import React, {Component} from 'react';
import { Form, Input, Button, message } from 'antd';
import './style/login.less'
import axios from '@/api/axios'
import SvgBorder from '@/components/svg-border/svg-border'
import { connect } from 'react-redux'
import store from '@/store/store'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span:24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};
class Login extends Component {
  state = {
    btnLoading:false
  };

  onFinish = params => {
    this.setState({
      btnLoading:true
    });
    const token = 'test';
    const type = this.props.match.params.type;
    sessionStorage.setItem(type==='admin'?'adminToken':'webToken',token);
    this.props.setToken(type==='admin'?'admin':'web',token);
    this.msg();
   /* axios.post('/login',params).then(res => {
      if (res.status === 200){
        const token = res.data.token;
        sessionStorage.setItem('token',token);
        //设置redux全局token
        this.props.setToken(token);
        axios.get('/auth').then(data=>{
          if (data.status === 200){
            sessionStorage.setItem('userInfo',res.data.user);
            this.props.history.push('/')
          }
        })
      }
    })*/
  };
  componentDidMount() {
    //监听token redux变化
    store.subscribe(()=>{
      console.log(store.getState())
    })
    console.log(this.refs.loginForm.getFieldValue('username'))
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  msg = () => {
    message.success({
      content:'您好admin!欢迎回来',
      duration:1,
      style:{
        marginTop:'30vh'
      }
    }).then(()=>{
      this.setState({
        btnLoading:true
      });
      alert(this.props.match.params.type==='web')
      if (this.props.match.params.type==='admin'){
        this.props.history.push('/admin/home');
      }else if(this.props.match.params.type==='web'){
        this.props.history.push('/web/home');
      }
    })
  };
  render() {
    const { btnLoading } = this.state;
    return <div className='login-back'>
      <img src={process.env.PUBLIC_URL+'/img/loginBack.jpg'} className='login-img' alt='登录背景图片' />
      <div className='login-color'>
        <div className='login-border-box'>
          <SvgBorder>
            <h1 className='login-title'>龙源设备数据监控分析平台</h1>
            <Form
              {...layout}
              name="platform"
              ref='loginForm'
              className='login-from'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}>
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入账号' },{pattern:/^[0-9a-zA-Z]{1,20}$/,message: '请输入字母数字下划线组合字符'}]}>
                <Input placeholder='请输入账号' prefix={<UserOutlined />}  />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' },{pattern:/^[0-9a-zA-Z_]{6,20}$/,message: '密码为6-20位字母数字下划线组合'}]}>
                <Input.Password placeholder='请输入密码' prefix={<UnlockOutlined />}  />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button style={{width:'100%',height:50}} loading={btnLoading} type="primary" size={"large"} htmlType="submit">
                  登 录
                </Button>
              </Form.Item>
            </Form>
          </SvgBorder>
        </div>
      </div>
    </div>
  }
}
const dispatchToProp = (dispatch) => {
  return {
    setToken:(type, data)=>{
      dispatch({
        type, data
      })
    }
  }
};
export default connect(null,dispatchToProp)(Login)
