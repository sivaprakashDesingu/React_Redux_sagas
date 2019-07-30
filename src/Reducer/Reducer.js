const initialState = {
  list: {}
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_SUCCESS":
      return {
        ...state,
        list: action.json,
      }
      case "GET_LIST_SUCCESS":
      return {
        ...state,
        list: action.list,
      }
    default:
      return state;
  }
};

export default Reducer;