const Header = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);
const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((acc, obj) => acc + obj.exercises, 0)}
  </p>
);

const Course = ({ course }) => (
  <>
    {course.name && <Header name={course.name} />}
    {course.parts && course.parts.length > 0 && (
      <>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )}
  </>
);

export default Course;
