import React, { useEffect, useState } from "react";
import Header from "../header";
import SingleCat from "../SingleCat";
import { useGlobalContext } from "../context";

const SearchByValues = () => {
  const [radioValues, setRadioValues] = useState("");
  const { AllCats, searchCatsByValues, searchedValues } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    const radioElements = e.target.elements;

    setRadioValues({
      adaptability: parseInt(radioElements.adaptability.value),
      affection: parseInt(radioElements.affection.value),
      dogfriendly: parseInt(radioElements.dogfriendly.value),
      intelligence: parseInt(radioElements.intelligence.value),
      hairless: parseInt(radioElements.hairless.value)
    });
  };

  useEffect(() => {
    if (AllCats) {
      searchCatsByValues(radioValues);
    }
  }, [radioValues, AllCats]);

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit} className="custom-search-inputs">
        <h1>Please select your preferences:</h1>
        <div>
          <p className="custom-search-title">Adaptability level</p>
          <div className="radio-inputs adaptability">
            {" "}
            <label className="radio">
              <input type="radio" value="1" name="adaptability" />1<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="2" name="adaptability" />2<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="3" name="adaptability" />3<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="4" name="adaptability" />4<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="5" name="adaptability" />5<span></span>
            </label>
          </div>
        </div>

        <div>
          {" "}
          <p className="custom-search-title">How affectionate you want your cat to be</p>
          <div className="radio-inputs affection">
            {" "}
            <label className="radio">
              <input type="radio" value="1" name="affection" />1<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="2" name="affection" />2<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="3" name="affection" />3<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="4" name="affection" />4<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="5" name="affection" />5<span></span>
            </label>
          </div>
        </div>

        <div>
          <p className="custom-search-title">Dog friendly level</p>

          <div className="radio-inputs dogfriendly">
            <label className="radio">
              <input type="radio" value="1" name="dogfriendly" />1<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="2" name="dogfriendly" />2<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="3" name="dogfriendly" />3<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="4" name="dogfriendly" />4<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="5" name="dogfriendly" />5<span></span>
            </label>
          </div>
        </div>

        <div>
          <p className="custom-search-title">Intelligence</p>

          <div className="radio-inputs intelligence">
            <label className="radio">
              <input type="radio" value="1" name="intelligence" />1<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="2" name="intelligence" />2<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="3" name="intelligence" />3<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="4" name="intelligence" />4<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="5" name="intelligence" />5<span></span>
            </label>
          </div>
        </div>

        <div>
          <p className="custom-search-title">Hairless or not ?</p>

          <div className="radio-inputs hairless">
            <label className="radio">
              <input type="radio" value="1" name="hairless" />
              Yes<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="0" name="hairless" />
              No<span></span>
            </label>
          </div>
        </div>

        <button type="submit" className="filter-button">
          Filter
        </button>

        <div className="container">
          <section className="cats">
            {searchedValues && searchedValues.length > 0 ? (
              searchedValues.map((cat, index) => {
                const { id, name, image, description, adaptability, affection_level, child_friendly, dog_friendly, hairless, reference_image_id } = cat;

                return <SingleCat name={id} key={index} image={(image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} catRace={name} desc={description} adaptability={adaptability} affection_level={affection_level} child_friendly={child_friendly} dog_friendly={dog_friendly} hairless={hairless} />;
              })
            ) : (
              <p>There is no matching results based on your criteria.</p>
            )}
          </section>
        </div>
      </form>
    </>
  );
};

export default SearchByValues;
