import { useGlobalContext } from "../context";
import Header from "../header";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Pagination from "../Pagination";
import SingleCat from "../SingleCat";

const Home = () => {
  const { cats, AllCats, loading, setPage, nextPage, prevPage, page } = useGlobalContext();

  return (
    <div className="container">
      <Header />

      {!loading && <Pagination />}

      <section className="cats">
        {!loading ? (
          cats.map((cat, index) => {
            const { id, name, image, description, adaptability, affection_level, child_friendly, dog_friendly, hairless, reference_image_id } = cat;

            return <SingleCat name={id} key={index} image={(image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} catRace={name} desc={description} adaptability={adaptability} affection_level={affection_level} child_friendly={child_friendly} dog_friendly={dog_friendly} hairless={hairless} />;
          })
        ) : (
          <Loading />
        )}
      </section>

      {!loading && <Pagination />}
    </div>
  );
};

export default Home;
