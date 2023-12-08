/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


function UseState() {
    const[currAge,setAge]=useState({age:19,sibiling:3});

    const handleAge=(val)=>{
setAge({
    ...currAge,[val]:currAge[val]+1
})
    }
    const{age,sibiling}=currAge

  return (
    <div>
        <h3>My Current Age is {age}</h3>
        <h4>My sibiling's age is {sibiling}</h4>
        <button onClick={()=>{handleAge("age")}}>Get Older</button>
        <button onClick={()=>{handleAge("sibiling")}}>Get more Sib</button>
    </div>
  )
}

export default UseState