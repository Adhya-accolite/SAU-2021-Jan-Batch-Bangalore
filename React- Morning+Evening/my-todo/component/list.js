import React from 'react';
import Todos from './todos';
const List=({todo,setTodo})=>{
    return(
        <div >
            <ul>
                
                {todo.map((todos)=>(
                    <Todos setTodo={setTodo} todo={todo}
                    key={todos.id} todos={todos} text={todos.text}/>
                ))}
            
            </ul>
        </div>
    );
};      
  export default List;