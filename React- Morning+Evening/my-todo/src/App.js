import React,{useState} from "react";
import './App.css';
import Frame from './component/frame';
import List from './component/list';
function App() {
  const[inputText, setInputText]=useState(""); 
  const [todo,setTodo]=useState([]);
  return (
    <div className="App">
      <header>
        <h1><center> Hello, Tell me about your to-do</center></h1>
      </header>
      <Frame inputText={inputText} todo={todo} setTodo={setTodo} setInputText={setInputText}/>
      <List setTodo={setTodo} todo= {todo} />
    </div>
    
  );
}

export default App;
