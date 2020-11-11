/**
 * @name svg动画边框
 * @author 李万金
 * @date 2020年11月9日13:25:17
 * */
import React, {Component} from 'react';
import './scss/style.less'
class Jsx extends Component {
  state = {
    repeatCount:'indefinite'
  };
  componentDidMount(){
    console.log()
  }
  render() {
    const {repeatCount} = this.state;
    return (
    <div className="dv-border-box-1">
      <svg width="150px" height="150px" className="left-top border">
        <polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd">
          <animate attributeName="fill" values="#4fd2dd;#b2e7eb;#4fd2dd" dur="1.5s" begin="0s" repeatCount={repeatCount}/>
        </polygon>
        <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#b2e7eb">
          <animate attributeName="fill" values="#b2e7eb;#4fd2dd;#b2e7eb" dur="1.5s" begin="0s" repeatCount={repeatCount}/>
        </polygon>
        <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd">
          <animate attributeName="fill" values="#4fd2dd;#b2e7eb;transparent" dur="2s" begin="0s" repeatCount={repeatCount}/>
        </polygon>
      </svg>
      <svg width="150px" height="150px" className="right-top border">
        <polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd">
          <animate attributeName="fill" values="#4fd2dd;#b2e7eb;#4fd2dd" dur="1.5s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
        <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#b2e7eb">
          <animate attributeName="fill" values="#b2e7eb;#4fd2dd;#b2e7eb" dur="1.5s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
          <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd">
            <animate attributeName="fill" values="#4fd2dd;#b2e7eb;transparent" dur="2s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
      </svg>
      <svg width="150px" height="150px" className="left-bottom border">
        <polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd">
          <animate attributeName="fill" values="#4fd2dd;#b2e7eb;#4fd2dd" dur="1.5s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
        <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#b2e7eb">
          <animate attributeName="fill" values="#b2e7eb;#4fd2dd;#b2e7eb" dur="1.5s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
        <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd">
          <animate attributeName="fill" values="#4fd2dd;#b2e7eb;transparent" dur="2s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
      </svg>
      <svg width="150px" height="150px" className="right-bottom border">
        <polygon points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63" fill="#4fd2dd">
            <animate attributeName="fill" values="#4fd2dd;#b2e7eb;#4fd2dd" dur="1.5s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
        <polygon points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8" fill="#b2e7eb">
          <animate attributeName="fill" values="#b2e7eb;#4fd2dd;#b2e7eb" dur="1.5s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
        <polygon points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54" fill="#4fd2dd">
          <animate attributeName="fill" values="#4fd2dd;#b2e7eb;transparent" dur="2s" begin="0s"  repeatCount={repeatCount}/>
        </polygon>
      </svg>
      <div className="border-box-content">
        {this.props.children}
      </div>
  </div>)
  }
}

export default Jsx
