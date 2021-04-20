import { useGlobalContext } from "../context";
import Header from "../header";
import React, { useEffect } from "react";

import SingleCat from "../SingleCat";

const Home = () => {
  const { cats, AllCats, loading, setPage, nextPage, prevPage, page } = useGlobalContext();

  return (
    <div className="container">
      <Header />
      {console.log(AllCats, cats)}
      <div className="pagination-container">
        <button className="btn prev-btn" onClick={prevPage}>
          Prev
        </button>

        {AllCats.length >= 2 &&
          AllCats.map((_, index) => {
            return (
              <button key={index} className={`${index === page ? "paginate-btn active" : "paginate-btn"}`} onClick={setPage}>
                {index + 1}
              </button>
            );
          })}

        <button className="btn next-btn" onClick={nextPage}>
          Next
        </button>
      </div>
      <section className="cats">
        {!loading &&
          cats.map((cat, index) => {
            const { id, name, image, description, adaptability, affection_level, child_friendly, dog_friendly, hairless, reference_image_id } = cat;

            return <SingleCat name={id} key={index} image={(image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} catRace={name} desc={description} adaptability={adaptability} affection_level={affection_level} child_friendly={child_friendly} dog_friendly={dog_friendly} hairless={hairless} />;
          })}
      </section>

      <div className="pagination-container">
        <button className="btn prev-btn" onClick={prevPage}>
          Prev
        </button>

        {AllCats.length >= 2 &&
          AllCats.map((_, index) => {
            return (
              <button key={index} className={`${index === page ? "paginate-btn active" : "paginate-btn"}`} onClick={setPage}>
                {index + 1}
              </button>
            );
          })}

        <button className="btn next-btn" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
