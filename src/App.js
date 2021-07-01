import './App.css';
import Button from './components/Button/Button';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {


  const items = [
    {
      text: "Create Laravel",
      done: true,
      id: 1
    },
    {
      text: "Create React",
      done: false,
      id: 2
    },
    {
      text: "Write API",
      done: true,
      id: 3
    },
    {
      text: "Create User",
      done: true,
      id: 4
    },
    {
      text: "Add comment",
      done: false,
      id: 5
    },
    {
      text: "Create Button",
      done: true,
      id: 6
    },


  ];

  return (
    <div className="App">


      <div>
        <h1>Todo List</h1>
        <TodoList items={items} />
      </div>
      <div>

        <h1>Buttons </h1>
        <Button opacity="0.7" text="Close Shipment" />
        <Button opacity="0.3" text="Close Shipment" />
        <Button opacity="1" text="Close Shipment" />

      </div>
    </div>
  );
}

export default App;
