import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "./App";

function UseContext(){

    const[text,setText]=useState(false)
    const[likes,setlikes]=useState(0)

    useEffect(()=>{
        alert ("content Button is clicked")
    },[text])
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
        {text && 
        <p>lo evevf ervervrevre erververv erververv erververv erververv erverv erverv erverv erverv erv3erv erv erv erverv erverv </p>
        }
        <button onClick={()=>setText(!text)}>Content</button>
        <h1>{likes}</h1>
        <button onClick={()=>setlikes((prev)=>prev+1)}>Like</button>
    </div>
  )
}

export default UseContext;