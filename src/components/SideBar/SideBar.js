import React, { Component } from "react";
import "./sideBar.css";
import Discount from "../Discount/Discount";
import { Search, Segment, Divider } from "semantic-ui-react";
import SearchString from "../StringSearch/StringSearch";
import StockAvaibility from "../StockAvaibility/StockAvaibility";
import Created from "../Created/Created";

const percent = [];
const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <Segment>
        <div>
          <Discount />
        </div>

        <Divider section />
        <div style={{ marginTop: "20px" }}>
          <h4> Search By Brand Name </h4>
          <SearchString />
        </div>

        <Divider section />
        <div>
          <h4>Check Stock Avaibility</h4>
          <StockAvaibility />
        </div>
        <Divider section />
        <div>
          <h4></h4>
          <Created />
        </div>
      </Segment>
    </div>
  );
};
export default SideBar;
