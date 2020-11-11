/*
 * 实时获取当前时间
 * 李万金
 * 2019-9-17
 * */

const padDate = function (value) {
  return value < 10 ? '0' + value : value;
};
export default function getDate() {
  const date    = new Date(),
    year    = date.getFullYear(),
    month   = padDate(date.getMonth() + 1),
    day     = padDate(date.getDate()),
    hours   = padDate(date.getHours()),
    minutes = padDate(date.getMinutes()),
    seconds = padDate(date.getSeconds()),
    weekArr = ['日','一','二','三','四','五','六'];
  let week = date.getDay();
  return year + '-' + month + '-' + day + '  星期' + weekArr[week] + '  ' + hours + ':' + minutes + ':' + seconds;
};
