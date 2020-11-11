/**
 * @name 顶部事件组件
 * @author 李万金
 * @date 2020年11月9日13:27:29
 * */
import React, {Component} from 'react';
import getDate from '@/utils/getDate'
class Timer extends Component {
  state = {
    timeStr:""
  };
  timer = null;
  componentDidMount() {
    this.setState({
      timeStr:getDate()
    });
    this.timer = setInterval(()=>{
      this.setState({
        timeStr:getDate()
      })
    },1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = null;
  }
  render() {
    const {timeStr} = this.state;
    return <div className="header-time">您好！admin &nbsp;&nbsp;  {timeStr}</div>
  }
}

export default Timer
