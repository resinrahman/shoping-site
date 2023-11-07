import React from "react";
import "./Place.css";
const Place = () => {
  return (
    <div>
      <div className="grid-box">
        <div className="item-cat">
          <div className="c">State</div>
        </div>
        <div className="item-drop">
          <div className="d">
            <select>
              <option></option>
            </select>
          </div>
        </div>
        <div className="item-subcat">
          <div className="sc">District</div>
        </div>
        <div className="item-box">
          <div className="b">
          <select>
              <option></option>
            </select>
          </div>
        </div>
        <div className="item-place">
            <div className="pl">Place</div>
        </div>
        <div className="item-b">
            <div className="plb"><input type="text"></input></div>
        </div>
        <div className="item-submit">
          <div className="st">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
