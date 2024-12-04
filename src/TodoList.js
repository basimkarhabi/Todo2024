import React from 'react'
import './App.css';


export default function TodoList({ UppateItems, DeleteItems ,Items}){
    //console.log(todos)
    return (
    <div className="to-do-container">
        <ul className="container">
          {Items.map((todo, index) =>
          {  
            return (
            <div key = {index} className= "item">
                <li
                title={todo.completed ? 'Click to undo' : 'Click mark as delted'}
                onClick={() => UppateItems(index)}
                  className={todo.completed ? "done" : ""}     >
                {index + 1}.{todo.text}
                </li> 
              <span className="item"
                  onClick={() => DeleteItems(index) }> ❌</span>   
           </div>
            )
          }
          )}
 
         </ul> 
     </div>
   
  )
}
