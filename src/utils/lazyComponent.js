
import {lazy} from 'react'
/**
 * @param {string} url 导出组件的路径
 * @return {promise}
 * */
export  default function lazyComponent(url) {
  return lazy(() => import(url));
}
