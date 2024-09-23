import React, { useEffect, useState } from "react";

const Users = () => {
  const [usersList, setusersList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const getUsersList = async () => {
    setisLoading(true);
    const fetchApi = await fetch("https://dummyjson.com/users");
    const result = await fetchApi.json();
    if (result.users.length > 0) {
      setusersList(result.users);
      setisLoading(false);
    }else{
      setusersList([]);
      setisLoading(false);
    }
  };
  // const handleFetchDataOfUsers = ()=>{
    
  //   getUsersList();
  // }
  // useEffect(() => { 
  //   getUsersList();
  // }, []);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div className="">
      <button onClick={getUsersList}>Fetch Data</button>
      <ul>
      {usersList && usersList.length > 0 ? (
        usersList.map((ele, index) => {
          return <li key={ele.id}>
            <p>Name: {ele.firstName} {ele.lastName}</p>
            <p>Age: {ele.age}</p>
            <p>Gender: {ele.gender}</p>
            </li>
        })
      ) : (
        <h1>User Not Found</h1>
      )}
      </ul>
      </div>
    </>
  );
};

export default Users;
