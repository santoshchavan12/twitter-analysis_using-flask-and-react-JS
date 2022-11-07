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
    setData([{}]);
    var myParams = {
      data: searchValue,
      count:count
    };
      axios
        .post("http://localhost:5000/data", myParams, { "Content-type":"application/json" },
        )
        .then(function (response) {
          console.log(response.data.tweets);
          setData(response.data.tweets);
        })
        .catch(function (error)
        {
          console.log(error);
        });
    e.preventDefault();
  }
  console.log(data.Positive)
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
        />{" "}
        <button className="fetch-btn" onClick={handleSubmit}>
          fetch
        </button>
      </div>
      <br />
      <br />
      <div className="result">
        {typeof data.Tweets === "undefined" ? (
          <>
            <p>Tweets will appear here</p>
            <div className="result-count">
              <li style={{color:"green",fontSize:"18px"}}>Positive</li>
              <br></br>
              <li style={{color:"blue",fontSize:"18px"}}>Neutral</li>
              <br></br>
              <li style={{ color: "red" ,fontSize:"18px"}}>Negative</li>
              <br></br>
            </div>
          </>
        ) : (<div className="result-count">
              <li style={{color:"green",fontSize:"18px"}}>Positive</li>
              <br></br>
              <li style={{color:"blue",fontSize:"18px"}}>Neutral</li>
              <br></br>
              <li style={{ color: "red" ,fontSize:"18px"}}>Negative</li>
              <br></br>
            </div> &&
          data.Tweets.map(function (item, i) {
            const pos = data.Positive;
            const neu = data.Neutral;
            const neg = data.Negative;
            if (pos[i] > neg[i] && pos[i] > neu[i])
              return (
                <li key={i} style={{
                  marginBottom: "20px",
                  color: "green",
                  textAlign: "justify",
                  textJustify: "inter-word"
                }}>
                  {item}
                </li>
              );
            else if (neg[i] > pos[i] && neg[i] > neu[i])
              return (
                <li
                  key={i}
                  style={{
                    marginBottom: "20px",
                    color: "red",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  {item}
                </li>
              );
            return (
              <li
                key={i}
                style={{
                  marginBottom: "20px",
                  color: "blue",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                {item}
              </li>
            );
          })
        )}
        {/* {data["tweets"]} */}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
