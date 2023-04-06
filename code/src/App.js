import './Card.css'
import { useState } from "react";
import ItemComponent from "./components/ItemComponent";
function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState(['Car Wash',"Pet-Walkingcd"]);
  function inputHandler(e) {
    setInput(e.target.value);
  }
  function submitHandler() {
    setTask((preVal) => {
      return [...preVal, input];
    });
    setInput("");
    console.log(task);
  }
  const filTheArray = (id)=>{
      const deletedItem = task.filter((item,index)=> {return index!==id})
      setTask(deletedItem);
      console.log('working')

  }
  return (
    <div className='card'>
      <h1 style={{textAlign: 'center',backgroundColor:'blue'}}>To-Do-List</h1>
      <div className='container'>
      <input className='input'
        value={input}
        onChange={(e) => inputHandler(e)}
        placeholder="enter task"
      />
      <button className='button-92' onClick={submitHandler}>add.Task...</button>
      {task.map((item, index) => {
        return <ItemComponent item={item} ind={index} del={filTheArray}/>;
      })}
      </div>
    </div>
  );
}

export default App;
