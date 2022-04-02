import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import DataList from "./DataList";
import "./table.css";
import Search from "../Search/Search";

function ShowData({
  data,
  searchFunction,
  TotalPages,
  deleteUser,
  prevPageButtonChange,
  nextPageButtonChange,
  currentPage,
  changePage,
  deleteSelectedUser,
  mainCheckBox,
  checkBox,
  updateUser,
  details,
}) {
  const arr = [];
  // const [checkBox, setChecked] = useState(false);
  const checkBoxhandle = (e, userId) => {
    if (e.target.checked) {
      arr.push(userId);
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == userId) {
          arr.splice(i, 1);
        }
      }
    }
  };

  return (
    <div>
      <Search searchFunction={searchFunction} data={data} />
      {data.length ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input
                    onChange={(e) => mainCheckBox(e)}
                    defaultChecked={checkBox}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <DataList
                  deleteUser={deleteUser}
                  checkBoxhandle={checkBoxhandle}
                  key={user.id}
                  user={user}
                  checkBox={checkBox}
                  updateUser={updateUser}
                  
                />
              ))}
            </tbody>
          </table>
          <button className="deleteBtn" onClick={() => deleteSelectedUser(arr)}>
            Delete
          </button>
          <Pagination
            totalPages={TotalPages}
            nextPageButtonChange={nextPageButtonChange}
            prevPageButtonChange={prevPageButtonChange}
            currentPage={currentPage}
            changePage={changePage}
          />
        </>
      ) : (
        <h3 className="notFound">Not Found...</h3>
      )}
    </div>
  );
}

export default ShowData;
