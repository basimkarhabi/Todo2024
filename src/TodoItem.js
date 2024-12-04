import React from 'react'
import SerchItem from "./SerchItem.js";

function TodoItem({ AddTodo, ItemText, setItem, DeleteItem ,})
{


  return (
      <div className="container">
      <div className="input-group mb-3 ml-1 d-flex flex-nowrap">
        
          <input type="text"
                  className="form-control p-2 mx-2"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Add Tasks"
                  value = {ItemText}
          onChange={(e) =>
          {setItem(e.target.value)}}
          />

        <button type="button"
                className="btn btn-outline-warning  mx-2 p-2"
                 onClick= {  AddTodo }
            
        > add Task</button>
      </div>

    </div>
    
  )
}            


export default TodoItem