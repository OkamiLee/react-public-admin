/**
 * @name 弹出框HOC
 * @author 李万金
 * @date 2020年11月9日13:28:10
 * */

import React, {Component} from 'react';
import { Modal } from 'antd';
class Dialog extends Component {
  render() {
    const {title, status, cancel} = this.props;
    const width = this.props.width||600;
    return <Modal
      title={title}
      centered
      width={width}
      destroyOnClose
      visible={ status }
      onCancel={()=>cancel()}
      maskClosable={false}
      footer={null}>
      {this.props.children}
    </Modal>
  }
}

export default Dialog
