import React, {Component} from 'react';

class Roll extends Component {
  state = {
    top:0,
    top2:200,
  };
  timer = null;
  base = 0;
  speed = 1000/60;
  componentDidMount() {
    this.timer = setInterval(()=>this.rollStart(), this.speed);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
  rollStart = ()=>{
    this.setState({
      top:this.base,
      top2:200 + this.base
    });
    this.base--;
    if(this.base === -200){
      this.base = 0;
    }
  };
  mouseEnter = ()=>{
    clearInterval(this.timer);
  };
  mouseLeave = ()=>{
    this.timer = setInterval(()=>this.rollStart(), this.speed);
  };
  render() {
    const {top,top2} = this.state;
    return (
      <div ref='box' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={box}>
        <div style={wrap}>
          <ul ref='ul1' style={{position:'absolute',top: top}} id="ul1">
            <li>1111111111111111111111</li>
            <li>2222222222222222222222</li>
            <li>3333333333333333333333</li>
            <li>4444444444444444444444</li>
            <li>5555555555555555555555</li>
            <li>6666666666666666666666</li>
            <li>7777777777777777777777</li>
            <li>8888888888888888888888</li>
            <li>9999999999999999999999</li>
          </ul>
          <ul id="ul2"  style={{position:'absolute',top:top2}}>
            <li>1111111111111111111111</li>
            <li>2222222222222222222222</li>
            <li>3333333333333333333333</li>
            <li>4444444444444444444444</li>
            <li>5555555555555555555555</li>
            <li>6666666666666666666666</li>
            <li>7777777777777777777777</li>
            <li>8888888888888888888888</li>
            <li>9999999999999999999999</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Roll;
const box = {
  height: 140,
  width: 400,
  border: '1px solid #cccccc',
  color: 'hotpink',
  overflow: 'hidden',
  margin: '50px auto',
  textAlign: 'center',
};
const wrap = {
  position:'relative',
};
