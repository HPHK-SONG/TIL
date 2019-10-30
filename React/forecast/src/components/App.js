import React, { useState, useEffect } from "react";
import Current from "./Current";
import Forecast from "./Forecast";

const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  //   state = {
  //       count:0,
  //   }

  useEffect(() => {
    console.log("useEffect가 일어났어요!");
    document.title = `U clicked ${count} times`;
  }, [count, number]); //componentDidMount

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          //this.setState({count:this.state.count+1});
        }}
      >
        카운트업!
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        카운트다운!
      </button>
      <h2>{count}</h2>
      <h2>{number}</h2>
      <header>
        <h1>일기예보</h1>
      </header>
      <main>
        <Current />
        <Forecast />
      </main>
    </>
  );
};

export default App;
