import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import Header from "../header";
import SingleCat from "../SingleCat";
const SearchByName = () => {
  const ref = useRef();
  const { cats, AllCats, loading, setPage, nextPage, prevPage, page, searchCat, searchedCats } = useGlobalContext();

  const handleChange = () => {
    let searchTerm = ref.current.value;

    if (searchTerm) {
      searchCat(searchTerm);
    } else {
      return;
    }
  };

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
          {!loading &&
            searchedCats.map((cat, index) => {
              const { id, name, image, description, adaptability, affection_level, child_friendly, dog_friendly, hairless, reference_image_id } = cat;

              return <SingleCat name={id} key={index} image={(image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} catRace={name} desc={description} adaptability={adaptability} affection_level={affection_level} child_friendly={child_friendly} dog_friendly={dog_friendly} hairless={hairless} />;
            })}
        </section>
      </div>
    </>
  );
};

export default SearchByName;
