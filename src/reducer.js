import { act } from "react-dom/test-utils";

const reducer = (state, action) => {
  if (action.type === "DISPLAY") {
    state.AllCats = action.payload;
    state.cats = action.payload[0];
    return {
      ...state
    };
  }

  if (action.type === "SEARCH_BY_NAME") {
    const allcats = state.AllCats.flat();

    let newArray = [];

    if (action.payload !== "") {
      console.log("reducer");
      newArray = allcats.filter(cat => {
        return cat.name.includes(action.payload);
      });
    }

    return {
      ...state,
      searchedCats: newArray
    };
  }

  if (action.type === "SEARCH_BY_VALUES") {
    let objValues = action.payload;
    const flatArray = state.AllCats.flat();

    const customSearchArray = flatArray.filter(({ adaptability, affection_level, dog_friendly, intelligence, hairless }) => {
      return adaptability === objValues.adaptability && affection_level === objValues.affection && dog_friendly === objValues.dogfriendly;
    });
    console.log(customSearchArray);
    return {
      ...state,
      searchedValues: customSearchArray
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
