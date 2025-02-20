import React from 'react'
import '../App.css';

export default function SerchItem({searchTodo}) {
    return (
      <div className="container">
        <div className="input-group mb-3 ml-1 d-flex flex-nowrap">
          <input type="text"
                  className="form-control p-2 mx-2"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
          placeholder="Search..."
          onChange = {(e)=>searchTodo(e.target.value)}
       
          />  
          
        </div>
      </div>
     
          
  )
}
