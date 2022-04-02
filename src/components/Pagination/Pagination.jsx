import React from "react";
import "./Pagination.css";
function Pagination({
  totalPages,
  indexOfLastItem,
  indexOfFirstItemm,
  currentItems,
  filterData,
  prevPageButtonChange,
  nextPageButtonChange,
  currentPage,
}) {
  return (
    <ul className="paginationNumbers">
      <button
        onClick={() => prevPageButtonChange()}
        disabled={currentPage == 1}
        className="PagesBtn"
      >
        Prev
      </button>
      {totalPages.map((number) => (
        <li className={currentPage == number ? "active" : null} key={number}>
          {number}
        </li>
      ))}
      <button
        disabled={currentPage == totalPages.length}
        onClick={() => nextPageButtonChange()}
        className="PagesBtn"
      >
        Next
      </button>
    </ul>
  );
}

export default Pagination;
