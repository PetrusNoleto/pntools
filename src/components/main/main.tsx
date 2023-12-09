import React from "react"
import { childrenTypes } from "../../types/default"

const Main:React.FC<childrenTypes> = ({children})=>{
    return(
        <main className="main">{children}</main>
    )   
}
export default Main