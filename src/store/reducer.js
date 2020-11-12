const tokenReducer = (state = null, action)=>{
  switch (action.type) {
    case 'web':
      return {type:'web',value:action.data};
    case 'admin':
      return {type:'admin',value:action.data};
    default:
      return {type:'admin',value:action.data};
  }
};
const menuReducer = (state = null, action)=>{
  switch (action.type) {
    case 'menu':
      return action.data;
    default:
      return state;
  }
};
module.exports = {tokenReducer, menuReducer};

