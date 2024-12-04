import React from 'react'
import './App.css';
import { useState } from "react";
import TodoList from './TodoList.js'
import TodoItem from "./TodoItem.js"
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers.js';

 function Todo()
 {
     const [todos, setTodos] = useState(() =>
     {
         const saveTode = localStorge.getItem('todos')
         return    
        saveTode ?    JSON.parse(saveTode)  : []
     })

   
   const AddTode = () =>{ 
     const [textInput, setTextinput] = useState('')
     const text = textInput.trim()
     const newTodo = { text, completed: false }
     if (text) {
       setTodos([...todos, newTodo])
       localStorage.setItem('todos' ,JSON.stringify([...todos,newTodo]))
       setTextinput('')
     }
   }
   

   const handlUpdateTodo = (index) =>
   {
     const updateTodo =  todos.map((todo, i) =>
     {
       i === index ?   {...todos ,completed : !completed }  : todo
     })
   }
   

   const handelDeletTodo = () =>
   {
     const newTodo = [...todos]
    
     newTodo.splice(index, 1)
     setTodos(newTodo)
      localStorage.setItem('todos',JSON.stringify(newTodos))

   }
   
   
     
     
// 1-initianlize State directly from localSroage 
 

//2-Add Todo and ubdate localeStorage  
   
  
        //add to localstorage
     

  
  

      // 1- creat the update todos array
     
      //2- Update the state with new array
     
      //3- Updata localstorage with the new array

    
    
    
        // updated the local storage
 }

  
  return (

    <div className="to-do-container">
      
    </div>             

  )

}

export default Todo
