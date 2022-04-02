import React from "react";
import "./Pagination.css";
function Pagination({
  totalPages,
  prevPageButtonChange,
  nextPageButtonChange,
  currentPage,
  changePage,
}) {
  return (
    <ul className="paginationNumbers">
      <button
        onClick={() => changePage(1)}
        disabled={currentPage == 1}
        className="PagesBtn"
      >
        First
      </button>
      <button
        onClick={() => prevPageButtonChange()}
        disabled={currentPage == 1}
        className="PagesBtn"
      >
        Prev
      </button>
      {totalPages.map((number) => (
        <li
          onClick={() => changePage(number)}
          className={currentPage == number ? "active" : null}
          key={number}
        >
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
      <button
        onClick={() => changePage(totalPages.length)}
        disabled={currentPage == totalPages.length}
        className="PagesBtn"
      >
        Last
      </button>
    </ul>
  );
}

export default Pagination;
