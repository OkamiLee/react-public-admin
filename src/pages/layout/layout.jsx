import React, {Component, Suspense,lazy} from 'react';
import { Layout, Dropdown, Menu, Modal} from 'antd';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import routes from '@/router/routes'
import { connect } from 'react-redux'
import store from '@/store/store'
import Menus from '@/components/menu/menu'
import HeaderTimer from '@/components/header-timer/timer'
import Dialog from "@/components/dialog/dialog.jsx";
import ChangePass from "./component/change-pass.jsx";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import './style/style.less'
const { Header, Sider, Content } = Layout;
const { confirm } = Modal;
class Layouts extends Component {
  state = {
    collapsed: false,
    visible:false,
  };
  componentDidMount() {
    const token = store.getState().token;
    if (token.type !== 'admin' && !sessionStorage.getItem('token')){
      this.props.history.push('/login/admin');
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  //路由跳转
  menuChange = (item) =>{
    if (this.props.location.pathname === item.key){
      return ;
    }
    this.props.history.push(item.key)
  };
  //个人中心
  personCenter = (data)=>{
    if (data.key === 'logout'){
      confirm({
        title: '确定要退出系统吗？',
        icon: <ExclamationCircleOutlined />,
        content: '',
        okText: '确定',
        cancelText: '取消',
        centered:true,
        onOk() {
          this.props.history.push('/login');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    } else {
      //修改密码
      this.setState({
        visible: true,
      });
    }
  };
  render() {
    const token = store.getState().token||sessionStorage.getItem('token');
    const { visible } = this.state;
    return (
      <Layout style={styleData}>
        <Sider style={{paddingTop:64}} className='nav-box' trigger={null} collapsible collapsed={this.state.collapsed}>
          {/*导航伸缩控制图标*/
            React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger menuChange',
            onClick: this.toggle,
          })}
          <Menus menuChange={this.menuChange} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header" style={{ padding: 0 }}>
            <div className="logo" >
              <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt={'logo'}/>
              <span>龙源设备数据监控分析平台</span>
            </div>
            {/*时间组件*/}
            <HeaderTimer/>
            <Dropdown overlay={
              <Menu onClick={this.personCenter}>
                <Menu.Item key="changePass">修改密码</Menu.Item>
                <Menu.Item key="logout">退出登录</Menu.Item>
              </Menu>
            } trigger={['click']}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                个人中心 <DownOutlined />
              </a>
            </Dropdown>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              minHeight: 280,
            }}>
            <Suspense fallback={<div/>}>
              <Switch>
                {
                  routes.map((v,i)=>(
                    <Route
                      key={i}
                      exact
                      path={v.path}
                      render={props => (
                        v.auth
                          ? (token ? <v.component {...props}/> : <Redirect to={{ pathname: '/login'}} />)
                          : <v.component {...props}/>
                      )}
                    />))
                }
                {
                  <Route component={lazy(() => import('../error/error'))}/>
                }
              </Switch>
            </Suspense>
          </Content>
          {/*<Footer style={{ textAlign: 'center' }}> 备案信息</Footer>*/}
        </Layout>
        <Dialog title="修改密码" status={ visible } cancel={()=>this.handleCancel()} >
          <ChangePass cancel={this.handleCancel} />
        </Dialog>
      </Layout>
    )
  }
}
export default withRouter(connect()(Layouts));

const styleData = {
  height:'100%'
};
