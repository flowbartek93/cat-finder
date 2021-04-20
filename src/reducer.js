const reducer = (state, action) => {
  if (action.type === "DISPLAY") {
    console.log(action.payload);

    return {
      ...state,
      cats: action.payload[0],
      AllCats: action.payload
    };
  }

  if (action.type === "SEARCH_BY_NAME") {
    const allcats = state.AllCats.flat();
    const searchedCats = allcats.filter(cat => {
      return cat.name.includes(action.payload);
    });

    return {
      ...state,
      searchedCats: searchedCats
    };
  }

  if (action.type === "SET_PAGE_INDEX") {
    //seting page by page index button
    let page = action.payload - 1;
    let setPage = state.AllCats;
    console.log(setPage);

    return { ...state, page: page, cats: setPage[page] };
  }

  if (action.type === "SET_PAGE") {
    //seting page by next or prev button
    let currentCats = state.AllCats;
    let currentPage = state.page;

    if (action.payload === "next") {
      if (currentPage > currentCats.length - 2) {
        currentPage = 0;
      } else {
        console.log(currentPage);
        console.log(currentCats.length);

        currentPage += 1;
      }
    }

    if (action.payload === "prev") {
      if (currentPage <= 0) {
        currentPage = currentCats.length - 1;
      } else {
        console.log(currentCats.length);

        currentPage -= 1;
      }
    }

    return { ...state, page: currentPage, cats: currentCats[currentPage] };
  }

  return state;
};

export default reducer;
