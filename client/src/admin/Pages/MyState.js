import React, { useEffect, useState } from "react";
import "./MyState.css";
import axios from "axios";
const MyState = () => {
  const [myState, setMystate] = useState("");
  const [Data, setData] = useState([]);

  const inputData = (e) => {
    var dat = {
      state_name: myState,
    };
    axios.post("http://localhost:5000/State", dat).then((response) => {
      // alert(response.data.message);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/State").then((response) => {
      const result = response.data.state;
      console.log(result);
      setData(result);
    });
  }, []);

  return (
    <div>
      <div className="main-container">
        <div className="top">
          <div className="t1">State Name</div>
          <div className="t2">
            <input
              type="text"
              onChange={(event) => setMystate(event.target.value)}
            />
          </div>
        </div>
        <div className="bottom">
          <button onClick={inputData}>Add</button>
        </div>
        <div className="main-box">
          <table  className="tbl">
            <tr>
              <th>SL.NO</th>
              <th>State</th>
              <th>Action</th>
            </tr>

            {
              <div>
                 <td>
                {Data.map((item, index) => (
                 
                    <td key={index}>{item.state_name}</td>
                  
                ))}
                </td>
              </div>  
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyState;
