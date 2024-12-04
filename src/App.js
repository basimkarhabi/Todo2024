import './App.css';
import Todo from "./Todo.js";
function App()
{
   
  return (
    <div className="App"> 
      <h1 className="header"> To Do List </h1>
      <div className="to-do-container"> 
        <Todo />      
      </div>
    </div>
  );
}

export default App;
