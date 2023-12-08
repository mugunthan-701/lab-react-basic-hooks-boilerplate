import React, { useState } from 'react'
import { useEffect ,useContext} from 'react'

function UseEffect() {
    const [currAge,setAge]=useState(19);
    const[currSib,setSib]=useState(3);

    useEffect(()=>{
        alert(`Something changed ${currAge} and my sibilings age is ${currSib}`)
    },[currAge,currSib])
  return (
    <div>
        <h3>My Current Age is {currAge} </h3>
        <h4>My sibilings {currSib}</h4>

        <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
        <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
    </div>
  )
}

export default UseEffect