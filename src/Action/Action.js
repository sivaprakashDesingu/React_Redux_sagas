export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const UPDATE_LIST_REQUEST = "UPDATE_LIST_REQUEST";
export const UPDATE_LIST_SUCCESS = "UPDATE_LIST_SUCCESS";
export const GET_UPDATED_LIST_REQUEST = "GET_UPDATED_LIST_REQUEST";
export const GET_UPDATED_LIST_SUCCESS = "GET_UPDATED_LIST_SUCCESS";

export const getList = () => ({
  type: "GET_LIST_REQUEST"
});
export function updateList (payload) {
  return {
    type: "UPDATE_LIST_REQUEST",
    payload
  }
}
export const updateListSuccess = (action) => ({
  type: "UPDATE_LIST_SUCCESS"
});


export const getUpdatedList = () => ({
  type: "GET_UPDATED_LIST_REQUEST"
});
export default {getList,updateList,getUpdatedList};