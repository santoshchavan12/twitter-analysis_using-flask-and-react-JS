import React, { useState } from "react";
import axios from "axios"




export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([{}])
  const [count, setCount] = useState(10);




  function handleSubmit(e) {

    if (searchValue === "" || count === 0)
    {
      alert("Key word or count is not valid");
      return;
     }

    console.log("hello")
    var myParams = {
      data: searchValue,
      count:count
    };
      axios
        .post("http://localhost:5000/data", myParams, { "Content-type":"application/json" },
        )
        .then(function (response) {
          console.log(response);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    
    e.preventDefault();
  }
  console.log(data.tweets)
  return (
        <div className="body">
        <h1 className="main-heading">Enter Hash tag :</h1>
        <div className="search-bar-input">
          <input
            className="input"
            type="text"
            name="text"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            placeholder="eg. #IPL"
          />
          <input
            className="input"
            type="number"
            name="count"
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
            placeholder="eg. #IPL"
          />{" "}
          <button className="fetch-btn" onClick={handleSubmit}>
            fetch
          </button>
        </div>
      <br />
      <br />
        <div className="result">
          {typeof data.tweets === "undefined" ? (
            <p>Tweets will appear here</p>
          ) : (
            data.tweets.map((item, i) => (
              <li key={i} style={{ marginBottom: "20px" }}>
                {item}
              </li>
            ))
          )}
          {data["tweets"]}
          <br />
          <br />
          <br />
        </div>
      </div>
  
  );
}
