import React from 'react'

function Todoitem({ update, delet ,todoitem,todo,index}) {
  return (
     <div key = {index} className= "item">
                <li
                title={todo.completed ? 'Click to undo' : 'Click mark as delted'}
                onClick={() => update(index)}
                  className={todo.completed ? "done" : ""}     >
                {index + 1}.{todo.text}
                </li> 
              <span className="item"
                  onClick={() => delet(index) }> ❌</span>   
      </div>
  )
}

export default Todoitem