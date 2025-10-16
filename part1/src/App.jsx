import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return;
  }
  return (
    <>
      <h2>Statistics:</h2>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Average: {(good - bad) / (good + neutral + bad)}</span>
      <span>Positive: {(good / (good + neutral + bad)) * 100}%</span>
    </>
  );
};

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h1>Give us your feedback!</h1>
      <h2>How was your experience at Unicafe?</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button onClick={() => setGood(good + 1)}>Good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
