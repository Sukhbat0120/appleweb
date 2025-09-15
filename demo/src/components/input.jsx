import { useState } from "react"
import { AddButton } from "./AddButton"
 export const Input = () =>{
    const [todos , setTodos] = useState([])
    const [inputValue , setInputValue] = useState("")
    const handleOnChange = (event) => {
        setInputValue(event.target.value)
console.log("input changed" , event.target.value)
}

const handleOnClick = () =>{
    setTodos([...todos , inputValue]);
    setInputValue("")
}
      return  <>
 <input
            type="text"
            value={inputValue}
            onChange={handleOnChange}
            maxLength={100}
            placeholder="Add a new task ..."
            className="rounded-[6px] border-solid border p-[8px]"
          ></input>

       
  <AddButton handleOnClick={handleOnClick}/>
  
  
     {
        todos.map((el,index) => {
            return <p key={index}>{el}</p>
        }) 
          }
 </>
 }

