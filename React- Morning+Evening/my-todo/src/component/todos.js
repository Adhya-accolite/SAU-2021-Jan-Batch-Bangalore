import React from 'react';


const Todos=({text,todos,todo,setTodo})=>{
    const deleteValue=()=>{
        setTodo(todo.filter((x) => x.id !== todos.id));
    };
    
    return (
        <div className="todos" >
           
            <li style={{backgroundColor:'honeydew'}}>{text}</li>
            <button className='complete'>
            <i className="fas fa-user-check"></i>
            </button>
            <button onClick={deleteValue} className="delete">
            <i className="fas fa-times-circle"></i>
            </button>
         
        </div>
    );
};
export default Todos;