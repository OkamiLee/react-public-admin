import React, {Component} from 'react';
import store from '@/store/store'
import './style/style.less'
import TheTitle from "../components/the-title/the-title";
import TheFooter from "../components/the-footer/the-footer";
import SvgBorder from '@/components/svg-border/svg-border'
import MapChart from "@/components/mapChart/mapChart.jsx";
import { Row, Col } from 'antd';
export default class Home extends Component {
  componentDidMount() {
    const token = store.getState().token;
    if (!token.value && !sessionStorage.getItem('webToken')){
      this.props.history.push('/login/web');
    }
  }

  render() {
    return <div className='container' style={{backgroundImage:`url(${process.env.PUBLIC_URL}'/img/back.jpg')`}}>
      <TheTitle/>
      <Row className='main'>
        <Col span={10}>
          <SvgBorder>
            <MapChart/>
          </SvgBorder>
        </Col>
        <Col span={7}>
          <SvgBorder>
            222
          </SvgBorder>
        </Col>
        <Col span={7}>
          <SvgBorder>
            222
          </SvgBorder>
        </Col>
      </Row>
      <TheFooter/>
    </div>
  }
}
