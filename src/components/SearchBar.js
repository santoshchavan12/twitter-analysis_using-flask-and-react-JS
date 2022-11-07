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
      <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
        This is realtime tweet analysis project. Based on the hashtag or any key
        words entered program will be able to fetch the tweets from twitter.
        Tweepy python library is used to fetch the data from twitter. you need a
        developer account to use this library. React JS is used for the frontend
        and flask is used for backend.
      </p>
      <br></br>
      <br></br>
      <h1 style={{ color: "royalblue", fontSize: "30px" }}> Enter Keyword </h1>
      <div className="search-bar-input">
        <input
          className="input"
          type="text"
          name="text"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="eg. IPL, icc, flood, trending etc.."
        />
        <input
          className="input"
          type="number"
          name="count"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <p style={{ color: "red" }}>* minmum count should be greater than 10</p>
        <button className="fetch-btn" onClick={handleSubmit}>
          fetch
        </button>
      </div>
      <br></br>
      <br></br>
      <h4 style={{ fontSize: "30px", fontWeight: "500" }}>Tweets</h4>
      <div className="result-count">
        <li style={{ color: "green", fontSize: "18px" }}>Positive</li>

        <li style={{ color: "blue", fontSize: "18px" }}>Neutral</li>

        <li style={{ color: "red", fontSize: "18px" }}>Negative</li>
        <br></br>
      </div>
      <br />
      <br />
      <div className="result">
        {typeof data.Tweets === "undefined" ? (
          <>
            <img src={require("../images/loading.gif")} alt="logo"></img>
          </>
        ) : (
          (
            <div className="result-count">
              <li style={{ color: "green", fontSize: "18px" }}>Positive</li>
              <br></br>
              <li style={{ color: "blue", fontSize: "18px" }}>Neutral</li>
              <br></br>
              <li style={{ color: "red", fontSize: "18px" }}>Negative</li>
              <br></br>
            </div>
          ) &&
          data.Tweets.map(function (item, i) {
            const pos = data.Positive;
            const neu = data.Neutral;
            const neg = data.Negative;
            const url = data.url;
            if (pos[i] > neg[i] && pos[i] > neu[i])
              return (
                <li
                  key={i}
                  style={{
                    marginBottom: "20px",
                    color: "green",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
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
              <>
                <center>
                  <li
                    key={i}
                    style={{
                      marginBottom: "20px",
                      color: "blue",
                    }}
                  >
                    {item}
                    <br></br>
                  </li>

                  <img
                    style={{
                      height: "300px",
                      width: "300px",
                      alignItems: "center",
                    }}
                    src={url[i]}
                    alt="twitter-img"
                  ></img>
                </center>
                <br></br>
                <br></br>
                <br></br>
              </>
            );
          })
        )}
        <br />
      </div>
    </div>
  );
}
