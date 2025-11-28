const App = () => {
  const coursename = "Full stack open";
  const part0 = "fundamentals of web ";
  const exercise0 = 2;
  const part1 = "Introduction to react ";
  const exercise1 = 6;
  const part2 = "Communicating with server ";
  const exercise2 = 11;

  return (
    <div>
      <Header coursename={coursename} />

      <Content
        part0={part0}
        exercise0={exercise0}
        part1={part1}
        exercise1={exercise1}
        part2={part2}
        exercise2={exercise2}
      />
      <Total total={exercise0 + exercise1 + exercise2} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.coursename}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part0} exercise={props.exercise0} />
      <Part name={props.part1} exercise={props.exercise1} />
      <Part name={props.part2} exercise={props.exercise2} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name}
      {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return <p>total number of exercises: {props.total}</p>;
};

export default App;
