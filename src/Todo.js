import React from 'react'
import './App.css';
import { useState } from "react";
import TodoList from './TodoList.js'
import TodoItem from "./TodoItem.js"
import SerchItem from "./SerchItem.js";

 function Todo()
 {
   const [searchTodo, setSearchTodo ] = useState("")
   
// 1-initianlize State directly from localSroage 
   const [todos, setTodos] = useState(() =>{
     const savedTodos = localStorage.getItem('todos')
     return savedTodos ? JSON.parse(savedTodos) : [] 
   })

  const [inputText, setInputText] = useState('')

//2-Add Todo and ubdate localeStorage  
   
  const handelAddTodo = () =>{
    const text = inputText.trim()
    const newTodo = { text, completed: false }
    if (text) {
      setTodos([...todos, newTodo])
      localStorage.setItem('todos',JSON.stringify([...todos,newTodo]))   //add to localstorage 
      setInputText("")    // Clear input 
      console.log("TEXT",newTodo.text)
    }

  }
   console.log(todos)
  console.log("inputText",inputText)

  
    const handleUpdatedTodo = (index) =>
    {

      // 1- creat the update todos array
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo      
      )

      //2- Update the state with new array
      setTodos(updatedTodos)
      //3- Updata localstorage with the new array
      localStorage.setItem('todos',JSON.stringify(updatedTodos))

    }
    
    const handelItemDelet = (index) =>{
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
      localStorage.setItem('todos',JSON.stringify(newTodos))  // updated the local storage
    }

   const filteredItems = todos.filter(todo => 
     todo.text.toLowerCase().includes(searchTodo.toLowerCase())
     
   )


   const sortItems = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done)) 
   

     
    
     
console.log(filteredItems)
   
   
   
    
  
  return (

    <div className="to-do-container">
       

       <TodoItem
            AddTodo={handelAddTodo} 
            setItem={setInputText}
            ItemText={inputText}
            DeleteItem={handelItemDelet}   
        Items={todos} 
       
      />

      <SerchItem
        searchTodo={setSearchTodo}
        sortTodo = {sortItems}
      />
       <TodoList
            UppateItems={handleUpdatedTodo}
            DeleteItems = {handelItemDelet}
        Items={filteredItems} 
       
      />


    </div>             

  )

}

export default Todo
