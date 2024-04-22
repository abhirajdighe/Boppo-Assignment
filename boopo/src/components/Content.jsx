import React, { useState } from "react";
import "../Style/content.css";

const Content = ({ ap }) => {
  const { companyImage, company, jobTitle, skills } = ap;
  // console.log(company)
  let store = company;

  return (
    <>
      {/* {data.map((items) => {
        
      })} */}

      {
        <div id="card">
          <div id="left">
            <div className="cardImage">
              <img src={companyImage} alt="" />
            </div>
            <div id="textContent">
              <h4>{store.companyName}</h4>
              <h2>{jobTitle}</h2>
            </div>
          </div>
          <div id="right">
            {skills.map((pi, index) => (
              <button key={index} id="btn">
                {pi}
              </button>
              // Using the index as the key is acceptable if the list of skills doesn't change order or content, otherwise, use a unique identifier.
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Content;
