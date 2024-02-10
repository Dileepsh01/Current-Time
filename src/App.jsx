import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "blue" }}>Current Time</h1>
      <h1 style={{ fontSize: "2rem", color: "green" }}>{time}</h1>
    </div>
  );
};

export default App;
