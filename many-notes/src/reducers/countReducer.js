const countReducer = (state, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return { count : state.count + 1}
    case 'DECREMENT':
      return { count: state.count - 1}
    default:
      throw new Error();
  }
}
export default countReducer;