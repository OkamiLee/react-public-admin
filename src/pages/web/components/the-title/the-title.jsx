import React, {Component} from 'react';
import './style/style.less'
export default class TheTitle extends Component {
  render() {
    return <div className='title-box'>
      <div className='title-center'>
        <svg data-v-1a660b6a="" width="400" height="50" className="svg_left">
          <polyline data-v-1a660b6a="" strokeWidth="2" fill="transparent" points="0, 0 30, 25" stroke="#4edcf1">
            <animate data-v-1a660b6a="" attributeName="stroke-dasharray" attributeType="XML" from="0, 30, 0, 30"
                     to="0, 0, 25, 0" dur="1.5s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98"
                     repeatCount="indefinite"/>
          </polyline>
          <polyline data-v-1a660b6a="" strokeWidth="2" fill="transparent" points="20, 0 50, 25 400, 25" stroke="#4edcf1">
            <animate data-v-1a660b6a="" attributeName="stroke-dasharray" attributeType="XML" from="0, 400, 0, 400"
                     to="0, 0, 400, 0" dur="1.5s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98"
                     repeatCount="indefinite"/>
          </polyline>
          <polyline data-v-1a660b6a="" fill="transparent" strokeWidth="3" points="0, 47, 250, 47" stroke="#4edcf1">
            <animate data-v-1a660b6a="" attributeName="stroke-dasharray" attributeType="XML" from="0, 250, 0, 250"
                     to="0, 0, 250, 0" dur="1.5s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98"
                     repeatCount="indefinite"/>
          </polyline>
        </svg>
        <h1 className='title-text'>风力发电数据分析系统</h1>
        <svg data-v-1a660b6a="" width="400" height="50">
          <polyline data-v-1a660b6a="" strokeWidth="2" fill="transparent" points="400, 0 370, 25" stroke="#4edcf1">
            <animate data-v-1a660b6a="" attributeName="stroke-dasharray" attributeType="XML" from="0, 30, 0, 30" to="0, 0, 25, 0" dur="1.5s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98" repeatCount="indefinite"/>
          </polyline>
          <polyline data-v-1a660b6a="" strokeWidth="2" fill="transparent" points="380, 0 350, 25 0, 25" stroke="#4edcf1">
            <animate data-v-1a660b6a="" attributeName="stroke-dasharray" attributeType="XML" from="0, 400, 0, 400" to="0, 0, 400, 0" dur="1.5s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98" repeatCount="indefinite"/>
          </polyline>
          <polyline data-v-1a660b6a="" fill="transparent" strokeWidth="3" points="400, 47, 200, 47" stroke="#4edcf1">
            <animate data-v-1a660b6a="" attributeName="stroke-dasharray" attributeType="XML" from="0, 250, 0, 250" to="0, 0, 250, 0" dur="1.5s" begin="0s" calcMode="spline" keyTimes="0;1" keySplines="0.4,1,0.49,0.98" repeatCount="indefinite"/>
          </polyline>
        </svg>
      </div>
    </div>
  }
}
