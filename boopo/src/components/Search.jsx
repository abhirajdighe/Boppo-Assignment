import React, { useEffect, useState } from "react";
import "../Style/search.css";
import Content from "./Content";
import { data } from "../data";

const Search = () => {
  const [search,setSearch] = useState('')
  return (
    <>
      <div id="search">
        <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search by Skills" type="search" />
      </div>
      <div className="container">
      {
        data
        .filter((item) => {
          if (search.toLowerCase() === '') {
            return true;
          }
          return item.skills.some((skill) =>
            skill.toLowerCase().includes(search.toLowerCase())
          );
        })
        .map((item) => (
          <Content key={item.id} ap={item}/>
        ))
      
      }

      </div>
      
      
      
    </>
  );
};

export default Search;
