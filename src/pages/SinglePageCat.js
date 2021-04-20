import { useGlobalContext } from "../context";
import Header from "../header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const searchById = "https://api.thecatapi.com/v1/breeds/search?q=";

const apiKey = process.env.REACT_APP_API_KEY;
const SinglePageCat = () => {
  const { name } = useParams();

  const { cats } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState({});

  const fetchSingleCat = async (query) => {
    const response = await fetch(`${searchById}${name}`, {
      headers: {
        "x-api-key": apiKey,
      },
    });
    const data = await response.json();

    if (data.length > 0) {
      setCat(data[0]);
      setLoading(false);
    } else if (data.length === 0) {
      console.log(cats);

      let selectedCat = await cats.filter((cat) => cat.id === name);

      console.log(selectedCat);
      setCat(selectedCat[0]);
      console.log("blad api");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCat(name);
  }, [name]);

  if (loading) {
    return (
      <div className="single-cat-container">
        <div className="loading"></div>;
      </div>
    );
  }

  const {
    id,
    reference_image_id,
    adaptability,
    energy_level,
    affection_level,
    dog_friendly,
    child_friendly,
    description,
    image,
  } = cat;

  return (
    <div className="container">
      <Header />
      {console.log(cat)}
      <div className="single-cat-container">
        <h1>My name is: {id}</h1>
        <div className="single-cat-info">
          <img
            className="single-cat-image"
            src={`https://cdn2.thecatapi.com/images/${
              reference_image_id || image.id
            }.jpg`}
            alt="image"
          />
          <div className="cat-info-parameters">
            <p className="cat-info">Adaptability: {adaptability} </p>
            <p className="cat-info">Affection:{affection_level} </p>
            <p className="cat-info">Child Friendly: {child_friendly}</p>
            <p className="cat-info">Dog Friendly: {dog_friendly}</p>
            <p className="cat-info">Energy Level: {energy_level}</p>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default SinglePageCat;
