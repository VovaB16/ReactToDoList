import ToDoList from "./components/ToDoList";
import "./index.css";

const TASK = [
  { name: "Hit the gym", completed: false, deadline: new Date() },
  { name: "Pay bills", completed: false, deadline: new Date() },
  { name: "Meet John", completed: false, deadline: new Date() },
  { name: "Buy eggs", completed: false, deadline: new Date() },
  { name: "Read a book", completed: false, deadline: new Date() },
  { name: "Organize office", completed: false, deadline: new Date() },
  { name: "Eat dinner", completed: false, deadline: new Date() },
  { name: "Buy apples", completed: false, deadline: new Date() },
  { name: "Meet George", completed: false, deadline: new Date() },
  { name: "Feed the cat", completed: false, deadline: new Date() },
  { name: "Write a letter", completed: false, deadline: new Date() },
  { name: "Run 1 km", completed: false, deadline: new Date() },
];

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>

      <ToDoList {...TASK[1]} />
      <ToDoList {...TASK[2]} />
      <ToDoList {...TASK[3]} />
      <ToDoList {...TASK[4]} />
      <ToDoList {...TASK[5]} />
      <ToDoList {...TASK[6]} />
      <ToDoList {...TASK[7]} />
      <ToDoList {...TASK[8]} />
    </>
  );
}
