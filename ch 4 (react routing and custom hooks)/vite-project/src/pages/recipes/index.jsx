import React from "react";
import { Link, useLocation } from "react-router-dom";
import UseFetch from "../../hooks/useFetch";
import useWindowResize from "../../hooks/use-window-resize";

const RecipesList = () => {
  const location = useLocation();
  const { data, loading, error } = UseFetch("https://dummyjson.com/recipes");
  const {width , height} = useWindowResize();

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="no-data-container">
        <p>No recipe available.</p>
      </div>
    );
  }

  return<> <div>RecipesList page</div>
  <div className="">
    <p>window width: {width}</p>
    <p>window height: {height}</p>
  </div>
  {

    data?.recipes?.length > 0 ? 
    data?.recipes?.map((items , index)=>{
// return <div className="" key={index}>{items.name}</div>
return <>
<Link to={`/home/recipes-list/${items.id}`}>{items.name}</Link>
<br />
</> 

    }): null
  }
  </>;
};

export default RecipesList;
