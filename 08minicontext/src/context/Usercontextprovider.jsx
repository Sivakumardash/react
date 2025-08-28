import React, { Children } from "react";
import Usercontext from "./usercontext";
const Usercontextprovider=({children})=>{
    const[user,setuser]=React.useState(null)  //Here is where you create the shared data.
return(
    <Usercontext.Provider value={{user,setuser}}>
        {children}
    </Usercontext.Provider>
)}
export default Usercontextprovider