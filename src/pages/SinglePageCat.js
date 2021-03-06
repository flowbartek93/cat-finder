import { useGlobalContext } from "../context";
import Header from "../header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import smallLoading from "../images/Ellipsis-2s-124px.svg";
const searchById = "https://api.thecatapi.com/v1/breeds/search?q=";

const apiKey = process.env.REACT_APP_API_KEY;
const SinglePageCat = () => {
  const { AllCats } = useGlobalContext();
  const { name } = useParams();
  const [cat, setCat] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (AllCats) {
      fetchSingleCat(name);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [AllCats]);

  const fetchSingleCat = async query => {
    const response = await fetch(`${searchById}${name}`, {
      headers: {
        "x-api-key": apiKey
      }
    });
    const data = await response.json();

    if (data.length > 0) {
      setCat(data[0]);
    } else if (data.length === 0) {
      //Dziwny problem z api, czasem zwraca kota, czasem tablica jest zupełnie pusta, dlatego poniższy kod sciąga dane ze stanu
      console.log("wyjscie awaryjne");

      const arrayFromState = AllCats.flat().filter(item => item.id === name);
      setCat(arrayFromState[0]);
      console.log(arrayFromState);
    }
  };

  const { id, reference_image_id, adaptability, energy_level, affection_level, dog_friendly, child_friendly, description, image } = cat;

  return (
    <div className="container">
      <Header />

      {!loading ? (
        <div className="single-cat-container">
          <h1>My name is: {id || console.log("brak id")}</h1>
          <div className="single-cat-info">
            <img className="single-cat-image" src={(image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} alt="kot" />
            <div className="cat-info-parameters">
              <p className="cat-info">Adaptability: {adaptability} </p>
              <p className="cat-info">Affection:{affection_level} </p>
              <p className="cat-info">Child Friendly: {child_friendly}</p>
              <p className="cat-info">Dog Friendly: {dog_friendly}</p>
              <p className="cat-info">Energy Level: {energy_level}</p>
            </div>
          </div>
          <p className="description">{description}</p>
          {console.log((image && image.url) || `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`)}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SinglePageCat;
