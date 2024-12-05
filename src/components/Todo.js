import React from 'react'
import '../App.css';
import { useState } from "react";
import TodoList from './TodoList.js'
import AddItem from "./AddItem.js"
import SerchItem from "./SerchItem.js";
import Footer from './Footer.js'
 function Todo(){
   const [searchTodo, setSearchTodo ] = useState("")
   
// 1-initianlize State directly from localSroage 
   const [todos, setTodos] = useState(() =>{
     const savedTodos = localStorage.getItem('todos')
     return savedTodos ? JSON.parse(savedTodos) : [] 
   })

  const [inputText, setInputText] = useState('')

     // filter and serch 
    const filteredItems = todos.filter(todo => 
     todo.text.toLowerCase().includes(searchTodo.toLowerCase()))
   
   
//2-Add Todo and ubdate localeStorage  
   
  const handelAddTodo = () =>{
    const text = inputText.trim()
    const newTodo = { text, completed: false }
    if (text) {
      const updatedTodos = [...todos, newTodo].sort((a,b)=> Number(a.completed)-Number(b.completed))
      setTodos(updatedTodos)  //// Update state with sorted todos
      localStorage.setItem('todos',JSON.stringify([...todos,newTodo]))   //add to localstorage 
      setInputText("")    // Clear input 
      console.log("TEXT",newTodo.text)
    }

  }
    
   
   console.log(todos)
  console.log("inputText",inputText)

   // **************************Update completion status and sort**************************
   
    const handleUpdatedTodo = (index) =>{
      // 1- creat the update todos array
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo      
      )
      const sortedTodos = updatedTodos.sort ((a,b)=> Number(a.completed)-Number(b.completed))
      //2- Update the state with new array
      setTodos(updatedTodos)
      //3- Updata localstorage with the new array
      localStorage.setItem('todos',JSON.stringify(sortedTodos))

    }
      // ************************Delete a Todo item and update localStorage**********************
    const handelItemDelet = (index) =>{
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
      localStorage.setItem('todos',JSON.stringify(newTodos))  // updated the local storage
    }
    
//******************************* counting completde  
   const completedTodos = todos.filter((todo) => todo.completed).length
   //****************************  TotalTodos
   const totalTodos = todos.length
  
     
console.log(filteredItems)
    
  return (

    <div className="to-do-container">
       

       <AddItem
            AddTodo={handelAddTodo} 
            setItem={setInputText}
            ItemText={inputText}

       
      />
      

      <SerchItem
        searchTodo={setSearchTodo}

      />

       <TodoList
            UppateItems={handleUpdatedTodo}
            DeleteItems = {handelItemDelet}
            Items={filteredItems}

      />
      <Footer
        completedcounter={completedTodos}
        totalTodos = {totalTodos}
      
      
      />

    </div>             

  )

}

export default Todo
