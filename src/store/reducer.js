const tokenReducer = (state = null, action)=>{
  switch (action.type) {
    case 'send_type':
      return action.data;
    case 'token':
      return action.data;
    default:
      return state;
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

