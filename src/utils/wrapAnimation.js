/**
 * @desc 路由切换组件动画
 * @param {Component} WrappedComponent
 * */
import React, {Component} from "react";
import { CSSTransition } from 'react-transition-group'
function wrapAnimation(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <CSSTransition in={true} timeout={1500} classNames="test" appear={true} >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
}
export default wrapAnimation;
