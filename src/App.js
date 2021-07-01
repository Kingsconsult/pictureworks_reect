import './App.css';
import Button from './components/Button/Button';
// import TodoForm from './components/TodoForm';

function App() {


 

  return (
    <div className="App">

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
