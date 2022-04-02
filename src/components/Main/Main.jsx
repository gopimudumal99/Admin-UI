import React, { useEffect, useRef, useState } from "react";
import ShowData from "../ShowData/ShowData";
import UpdatedForm from "../UpdatedForm/UpdatedForm";

function Main() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [checkBox, setChecked] = useState(false);
  const [details, setDetails] = useState("")
  const isUpdate = useRef(false)
  const marked = useRef(false)
  const [name,setName] = useState("")
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

  const deleteUser = (userId) => {
    let data = userData.filter((el) => el.id !== userId);
    setUserData(data);
    setFilterData(data);
  };

  const deleteSelectedUser = (usersArr) => {
    let data = userData.filter(
      (user) => !usersArr.find((userId) => userId == user.id)
    );
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
  const changePage = (number) => {
    setCurrentPage(number);
  };

  
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const mainCheckBox = (e) => {
    if (!checkBox) {
      currentItems.map((el) => (el.checked = true));
      marked.current =true
    } else {
      currentItems.map((el) => delete el.checked);
      marked.current = false;
    }
    setChecked(!checkBox);
    console.log(marked)
  };
  
  const updateUser = (user) => {
    setDetails(user)
  };
  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <ShowData
            data={currentItems}
            deleteUser={deleteUser}
            searchFunction={onChangeFilterData}
            currentItems={currentItems}
            TotalPages={pages}
            prevPageButtonChange={prevPageButtonChange}
            nextPageButtonChange={nextPageButtonChange}
            currentPage={currentPage}
            changePage={changePage}
            deleteSelectedUser={deleteSelectedUser}
            mainCheckBox={mainCheckBox}
            checkBox={checkBox}
            updateUser={updateUser}
        />
      )}
      <UpdatedForm user={details}/>
    </div>
  );
}

export default Main;
