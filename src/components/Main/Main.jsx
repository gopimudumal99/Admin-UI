import React, { useEffect, useRef, useState } from "react";
import ShowData from "../ShowData/ShowData";

function Main() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const USERS_URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  useEffect(() => {
    getData(USERS_URL);
  }, []);

  const getData = async (api) => {
    setIsLoading(true);
    let res = await fetch(api);
    setUserData(await res.clone().json());
    setFilterData(await res.json());
    setIsLoading(false);
  };

  const onChangeFilterData = (text) => {
    let data = userData.filter(
      (el) =>
        el.email.includes(text) ||
        el.name.includes(text) ||
        el.role.includes(text)
    );
    setFilterData(data);
  };

  const deleteUser = (user) => {
    let data = userData.filter((el) => el != user);
    setUserData(data);
    setFilterData(data);
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(filterData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const prevPageButtonChange = () => {
    setCurrentPage((value) => value - 1);
  };
  const nextPageButtonChange = () => {
    setCurrentPage((value) => value + 1);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <ShowData
          data={currentItems}
          deleteUser={deleteUser}
          searchFunction={onChangeFilterData}
          indexOfLastItem={indexOfLastItem}
          indexOfFirstItem={indexOfFirstItem}
          currentItems={currentItems}
          TotalPages={pages}
          prevPageButtonChange={prevPageButtonChange}
          nextPageButtonChange={nextPageButtonChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Main;
