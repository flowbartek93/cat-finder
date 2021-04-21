import { Link } from "react-router-dom";
import smallLoading from "./images/Ellipsis-2s-124px.svg";
function SingleCat({ name, image, catRace, desc, adaptability, affection_level, child_friendly, dog_friendly, hairless }) {
  return (
    <>
      <div className="single-cat">
        <div className="img-container">
          <img
            onLoad={e => {
              e.target.src = image;
            }}
            src={smallLoading}
            alt="kot"
          />
        </div>
        <p>My race is : {catRace}</p>
        <p>{desc}</p>

        <Link to={`/cats/${name}`} className="adopt-link">
          <button className="btn">Adopt</button>
        </Link>
      </div>
    </>
  );
}

export default SingleCat;
