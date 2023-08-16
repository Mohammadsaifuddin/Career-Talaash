import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductsData.js";

function Collegedisplay() {
  const { id } = useParams();
  return (
    <div>
      <div className="college-dis">
        <h1>{ProductsData[id - 1].name}</h1>
        <p>{ProductsData[id - 1].info}</p>
        <p>{ProductsData[id - 1].adm}</p>
        <p>{ProductsData[id - 1].fee}</p>
        <p>{ProductsData[id - 1].plac}</p>
      </div>
    </div>
  );
}

export default Collegedisplay;
