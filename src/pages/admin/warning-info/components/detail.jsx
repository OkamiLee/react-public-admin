

import React, {Component} from 'react';
import { Button, Timeline, Descriptions  } from 'antd';
import BarChart from '@/components/barChart/barChart.jsx'
/*import $ from '../../../../api/axios'*/
class warningDetail extends Component {

  render() {
    return (<div style={{maxHeight:500,overflow:'auto'}}>
      <Timeline>
        <Timeline.Item>
          <Descriptions title="基本信息" column={2}>
            <Descriptions.Item label="风机编号">111</Descriptions.Item>
            <Descriptions.Item label="风场名称">222</Descriptions.Item>
            <Descriptions.Item label="风机编号">333</Descriptions.Item>
            <Descriptions.Item label="风机名称">444</Descriptions.Item>
          </Descriptions>
        </Timeline.Item>
        <Timeline.Item>
          <Descriptions title="告警信息" column={2}>
            <Descriptions.Item label="告警测点编号">111</Descriptions.Item>
            <Descriptions.Item label="告警测点名称">222</Descriptions.Item>
            <Descriptions.Item label="告警时间" span={2}>222</Descriptions.Item>
            <Descriptions.Item label="告警图片" span={2}>
              <BarChart/>
            </Descriptions.Item>
          </Descriptions>
        </Timeline.Item>
        <Timeline.Item>
          <Descriptions title="响应信息" column={2}>
            <Descriptions.Item label="响应时间">111</Descriptions.Item>
            <Descriptions.Item label="是否需要处理">222</Descriptions.Item>
          </Descriptions>
        </Timeline.Item>
        <Timeline.Item>
          <Descriptions title="响应信息" column={1}>
            <Descriptions.Item label="反馈时间">111</Descriptions.Item>
            <Descriptions.Item label="反馈内容">222</Descriptions.Item>
          </Descriptions>
        </Timeline.Item>
      </Timeline>
      <div className='textAlign'>
        <Button onClick={()=>this.props.cancel()} >关闭</Button>
      </div>
    </div>)
  }
}
export default warningDetail
