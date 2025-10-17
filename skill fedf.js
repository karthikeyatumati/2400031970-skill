import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Counter: {count}</h1>
      <div>
        <button style={{ ...styles.button, backgroundColor: "#4CAF50" }} onClick={increment}>
         ➕ Increment
        </button>
        <button style={{ ...styles.button, backgroundColor: "#f44336" }} onClick={decrement}>
          ➖ Decrement
        </button>
        <button style={{ ...styles.button, backgroundColor: "#2196F3" }} onClick={reset}>
          🔁 Reset
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s",
  },
};
