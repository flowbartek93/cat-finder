import React, { useEffect } from "react";
import Header from "../header";

const SearchByValues = () => {
  return (
    <>
      <Header />
      <form className="custom-search-inputs">
        <div>
          <p className="custom-search-title">Adaptability level</p>
          <div className="radio-inputs">
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
          <div className="radio-inputs">
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

          <div className="radio-inputs">
            <label className="radio">
              <input type="radio" value="1" name="dog-friendly" />1<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="2" name="dog-friendly" />2<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="3" name="dog-friendly" />3<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="4" name="dog-friendly" />4<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="5" name="dog-friendly" />5<span></span>
            </label>
          </div>
        </div>

        <div>
          <p className="custom-search-title">Intelligence</p>

          <div className="radio-inputs">
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

          <div className="radio-inputs">
            <label className="radio">
              <input type="radio" value="1" name="intelligence" />
              Yes<span></span>
            </label>
            <label className="radio">
              <input type="radio" value="2" name="intelligence" />
              No<span></span>
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchByValues;
