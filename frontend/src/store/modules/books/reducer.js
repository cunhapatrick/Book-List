// import produce from 'immer';
export default (state = {
  loading: true,
  data: {
    docs: [],
    total: 0,
    page: 1,
    pages: 1,
  } 
}, action) => {
  
  switch(action.type) {
    default:
      return state;
    case '@book/LIST_SUCCESS':

      return { ...state, loading: false, data: { ...action.payload.books } };
  }

};