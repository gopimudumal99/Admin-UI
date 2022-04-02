import React, { useEffect, useRef, useState } from "react";
import ShowData from "../ShowData/ShowData";

function Main() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(userData)  
  const [currentPage,setCurrentPage] = useState(1) 
  const USERS_URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  useEffect(() => {
    getData(USERS_URL);
  }, []);

  const getData = async (api) => {
      setIsLoading(true);
      let res = await fetch(api);
      setUserData(await res.clone().json())
      setFilter(await res.json())
      setIsLoading(false);
    };
  
    const onChangeFilter = (text) => { 
      let data =  userData.filter(el=> el.email.includes(text) || el.name.includes(text) || el.role.includes(text))
      setFilter(data)
    }

    const deleteUser = (user) => {
      let data = userData.filter((el) => el != user);
      setUserData(data);
      setFilter(data); 
    }

    

  return (
    <div>
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <ShowData
          data={filter}
          deleteUser={deleteUser}
          searchFunction={onChangeFilter}
        />
      )}
    </div>
  );
}

export default Main;
