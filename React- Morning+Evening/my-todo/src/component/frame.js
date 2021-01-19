import React from 'react';

const Frame =({inputText,setInputText,todo,setTodo})=>{
    const inputValue=(x)=>{
        console.log(x.target.value);
        setInputText(x.target.value);
    };
    const addTodo=(x)=>{

x.preventDefault(); 
setTodo([
    ...todo,{text:inputText,completed:false, id:Math.random()*100}
]);
setInputText("");
   };
    return (
        <form>
        <input style={{marginLeft:500,marginBlockStart:60}} value={inputText} onChange={inputValue}type="text" className="input" />
        <button onClick={addTodo} type="submit" value="Add">
        <i className="far fa-calendar-plus"></i>
        </button>
       
        </form>
    );
};
export default Frame;