import React from "react";
import Pagination from "../Pagination/Pagination";
import DataList from "./DataList";
import "./table.css";
import Search from "../Search/Search";

function ShowData({
  data,
  searchFunction,
  TotalPages,
  deleteUser,
  currentItems,
  indexOfLastItem,
  indexOfFirstItem,
  prevPageButtonChange,
  nextPageButtonChange,
  currentPage,
}) {
  return (
    <div>
      <Search searchFunction={searchFunction} data={data} />
      {data.length ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <DataList deleteUser={deleteUser} key={user.id} user={user} />
              ))}
            </tbody>
          </table>
          <button className="deleteBtn">Delete</button>
          <Pagination
            totalPages={TotalPages}
            indexOfLastItem={indexOfLastItem}
            indexOfFirstItem={indexOfFirstItem}
            currentItems={currentItems}
            filterData={data}
            nextPageButtonChange={nextPageButtonChange}
            prevPageButtonChange={prevPageButtonChange}
            currentPage={currentPage}
          />
        </>
      ) : (
        <h3 className="notFound">Not Found...</h3>
      )}
    </div>
  );
}

export default ShowData;
