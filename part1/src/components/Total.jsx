const Total = ({ exercises }) => {
  const total = exercises.reduce((acc, curr) => acc + curr, 0);

  return <p>Total exercises: {total}</p>;
};

export default Total;
