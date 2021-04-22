import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import Header from "../header";
import SingleCat from "../SingleCat";
const SearchByName = () => {
  const ref = useRef();

  const { AllCats, searchCat, searchedCats } = useGlobalContext();
  const [searchState, setSearchState] = useState(false);

  const handleChange = () => {
    let searchTerm = ref.current.value;

    if (searchTerm) {
      searchCat(searchTerm);
    } else if (!searchTerm) {
      searchCat(""); //search field is empty, pass empty string to reducer
    }
  };
  console.log(searchedCats);

  useEffect(() => {
    if (searchedCats) {
      setSearchState(true);
      if (searchedCats.length === 0) {
        setSearchState(false);
      }
    }
  }, [searchedCats]);

  return (
    <>
      <Header />
      <div>
        <form className="form">
          <div className="search-container">
            <label htmlFor="search" className="search-label">
              <p>Search by Cat name</p>
            </label>
            <input ref={ref} type="text" className="search-engine" name="search" onChange={handleChange} />
          </div>
        </form>
      </div>

      <div className="container">
        <section className="cats">
          {searchState ? (
            searchedCats.map((cat, index) => {
              const { id, name, image, description, adaptability, affection_level, child_friendly, dog_friendly, hairless, reference_image_id } = cat;

              return <SingleCat name={id} key={index} image={(image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} catRace={name} desc={description} adaptability={adaptability} affection_level={affection_level} child_friendly={child_friendly} dog_friendly={dog_friendly} hairless={hairless} />;
            })
          ) : (
            <p className="search-field-nodata">No cats found, please insert some data to search field</p>
          )}
        </section>
      </div>
    </>
  );
};

export default SearchByName;
