const App = () => {
  // Single object holding course name and parts
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "fundamentals of web", exercises: 2 },
      { name: "Introduction to react", exercises: 6 },
      { name: "Communicating with server", exercises: 11 },
    ],
  };

  // Access parts from the course object
  const parts = course.parts;

  // Calculate total exercises
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.coursename}</h1>;
};

const Content = ({ parts }) => (
  <div>
    {parts.map((p) => (
      <p>
        {p.name} {p.exercises}
      </p>
    ))}
  </div>
);


const Total = (props) => {
  return <p>total number of exercises: {props.total}</p>;
};

export default App;
