import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: 'flex-start'}}>
      <h1>Give us your feedback!</h1>
      <h2>How was your experience at Unicafe?</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button onClick={() => setGood(good + 1)}>Good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>Neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>Bad</Button>
      </div>
      <h2>Statistics:</h2>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
    </div>
  );
};

export default App;
