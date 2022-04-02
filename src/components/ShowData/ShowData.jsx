import React from "react";
import Search from "../../Search/Search";
import Pagination from "../Pagination/Pagination";
import DataList from "./DataList";
import "./table.css";
function ShowData({ data, searchFunction, deleteUser }) {
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
                  <Pagination/>
        </>
      ) : (
        <h3 className="notFound">Not Found...</h3>
      )}
    </div>
  );
}

export default ShowData;
