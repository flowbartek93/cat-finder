import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
const Pagination = () => {
  const { AllCats, prevPage, setPage, nextPage, page } = useGlobalContext();

  return (
    <>
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
    </>
  );
};

export default Pagination;
