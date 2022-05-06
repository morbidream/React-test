import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App({ input }) {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    });
  }, []);
  return (
    <div className="App">
      {!input ? (
        <>
          Date & Time: <br />
          {dateState.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric"
          })}
          &nbsp; , &nbsp;
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
          })}
          <br />
          <br />
        </>
      ) : input instanceof Array ? (
        <>
          Array:
          {input.map((item) => (
            <div>{item}</div>
          ))}
          <br />
        </>
      ) : (
        <>
          Anything else:
          <br />
          {input}
        </>
      )}
    </div>
  );
}
