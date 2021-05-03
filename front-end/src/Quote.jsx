import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

function Quote() {
  const [phrase, setPhrase] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    axios.get("/chuck").then((res) => {
      const newPhrase = res.data.quote;
      setPhrase(newPhrase);
    });
  }, [click]);

  return (
    <div>
      <div>
        <img src="https://www.fiatprofessional.com.mt/wp-content/uploads/2017/07/ChuckNorris-Lage1.jpg" />
      </div>
      <div className="quotebutton">
        <button
          onClick={() => {
            setClick(!click);
          }}
        >
          Click
        </button>
        <h2>{phrase}</h2>
      </div>
    </div>
  );
}
export default Quote;
