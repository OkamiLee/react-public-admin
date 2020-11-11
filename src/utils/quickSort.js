/**
 * @desc 快排
 * @param {Array} arr 需要排序的数组
 * @return {Array} 返回排序后的数组
 * */
export default function quickSort (arr) {
  if (arr.length<1){
    return arr;
  }
  let pivotIndex = Math.floor(arr.length/2);
  let pivot = arr.splice(pivotIndex,1)[0];
  let leftArr = [];
  let rightArr = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat([pivot],quickSort(rightArr));
}
