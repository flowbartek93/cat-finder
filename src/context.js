import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const searchUrl = "https://api.thecatapi.com/v1/breeds/search?q=";
const mainUrl = "https://api.thecatapi.com/v1/breeds";
const apiKey = process.env.REACT_APP_API_KEY;

const initialState = {
  page: 0,
  AllCats: [],
  cats: []
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const fetchCats = async query => {
    let url;

    if (query) {
      url = `${searchUrl}${query}`;
    } else {
      url = `${mainUrl}`;
    }

    const response = await fetch(url, {
      headers: {
        "x-api-key": apiKey
      }
    });
    const catBreeds = await response.json();

    const itemPerPage = 9;
    const pages = Math.ceil(catBreeds.length / 9);

    const newArray = Array.from({ length: pages }, (_, index) => {
      const start = index * itemPerPage;

      return catBreeds.slice(start, start + itemPerPage);
    });

    dispatch({ type: "DISPLAY", payload: newArray });
    setLoading(false);
  };

  const setPage = e => {
    let choosenPage = parseInt(e.target.textContent);
    console.log(choosenPage);

    dispatch({ type: "SET_PAGE_INDEX", payload: choosenPage });
  };
  const prevPage = () => {
    dispatch({ type: "SET_PAGE", payload: "prev" });
  };
  const nextPage = () => {
    dispatch({ type: "SET_PAGE", payload: "next" });
  };

  const searchCat = term => {
    dispatch({ type: "SEARCH_BY_NAME", payload: term });
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return <AppContext.Provider value={{ ...state, loading, setPage, fetchCats, nextPage, prevPage, searchCat }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
