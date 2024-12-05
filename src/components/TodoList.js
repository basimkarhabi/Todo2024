import React from 'react'
import '../App.css';
import Todoitem from './Todoitem.js'

export default function TodoList({ UppateItems, DeleteItems ,Items, }){
    //console.log(todos)
    return (
      <div className="to-do-container">
      
        <ul className="container">
           
          {Items.map((item, indexitem) =>
          {  
            return (
              < Todoitem
                  todo={item}
                  index={indexitem}
                   delet={DeleteItems}
                  update={UppateItems}
                  todoitem = {Items}
              
              />
            )
          }
          )}
 
         </ul> 
     </div>
   
  )
}
