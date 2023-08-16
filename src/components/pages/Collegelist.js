import { React, useState } from "react";
import { ProductsData } from "../../ProductsData";
import { useHistory } from "react-router-dom";
//import Collegedisplay from "../../components/pages/Collegedisplay";
import "../../components/pages/Collegelist.css";
function Colleges() {
  const history = useHistory();
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div className="listOfProducts">
      <input
        type="text"
        placeholder="Search colleges"
        onChange={(event) => {
          setsearchTerm(event.target.value);
        }}
      />
      <h1>Top Colleges in Telangana</h1>
      <div className="productsList">
        {ProductsData.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((product) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                history.push(`/Colleges/${product.id}`);
              }}
            >
              <h1>{product.name}</h1>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Colleges;
