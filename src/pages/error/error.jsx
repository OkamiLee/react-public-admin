import React, {Component} from 'react';
import './style/style.less'
class Error extends Component {
  state = {
    num:5,
    typeString:'对不起，页面找不到！',
  };
  timer = null;
  componentDidMount(){
    let str = '';
    switch(this.props.match.params.type){
      case '404':
        str = '对不起，页面找不到！';
        break;
      case '500':
        str = '服务器返回异常！';
        break;
      default:
        str = '对不起，页面找不到！';
        break;
    }
    this.setState({
      typeString: str
    });
    this.timer = setInterval(()=>{
      let num = this.state.num;
      if(num>0){
        num --
      }else{
        this.goto();
      }
      this.setState({
        num
      })
    },1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = null;
  }
  goto = ()=>{
    this.props.history.push('/admin/home');
  };
  render() {
    const { num, typeString } = this.state;
    return <div className="cen_box">
      <div className="err_box">
        <img src={process.env.PUBLIC_URL+'/img/404.png'} className="err_img" alt='404图片' />
        <div className="err_info">
          <h1>404</h1>
          <h2>{typeString}</h2>
          <span className="err_link" onClick={this.goto} >(<em>{num}</em>)秒后返回首页</span>
      </div>
    </div>
  </div>
  }
}

export default Error
