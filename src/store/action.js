const setMenu = ()=>{
  return {
    type:'menu',
    data: null
  }
};
const setToken = (data)=>{
  return {
    type:'token',
    data: data
  }
};
module.exports = {
  setMenu,setToken
};
