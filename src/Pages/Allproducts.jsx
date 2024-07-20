import React from "react";
import Popular from "../Components/Popular/Popular";
import "./pages.css";
import { useState } from "react";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import SearchBar from "../Components/SeachBar/SearchBar";
import items from "../data/index";
import { Row } from "react-bootstrap";
import e4 from "../images//category/macbook.png";
import e3 from "../images//category/watchone.png";
import FilterSelect from "../Components/FilterSelect/FilterSelect";
import Banner from "../Components/Banner/Banner";

//allproducts
const Allproducts = () => {
  const [filterList, setFilterList] = useState(items);
  useWindowScrollToTop();

  return (
    <>
      <div>
        <div className="allproducts">
          <div className="allproductsbanners">
            <img src={e3} alt="" className="allproductsbannerone" />
            <img src={e4} alt="" className="allproductsbannertwo" />
          </div>
          <h2 className="allinone">All In One</h2>
        </div>
        <FilterSelect setFilterList={setFilterList} />

        <Row>
          <div className="diaplayitems">
            <SearchBar setFilterList={setFilterList} />
            <Popular productItems={filterList} />
          </div>
        </Row>
      </div>
      <Banner />
    </>
  );
};

export default Allproducts;
