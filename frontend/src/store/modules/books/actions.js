export function searchBooksRequest(data = {}) {
  const { page = 1, filter = '', iData =1998, eData = 2019 } = data;
  return {
    type: '@book/LIST_REQUEST',
    payload: {
      page: page,
      filter: filter,
      iData: iData,
      eData: eData,
    }
  };
}

export function searchBooksSuccess(books) {
  return {
    type: '@book/LIST_SUCCESS',
    payload: { books },
  };
}