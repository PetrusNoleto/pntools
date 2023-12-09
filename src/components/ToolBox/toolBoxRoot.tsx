import '../../styles/main.css'
import React from "react"
import { childrenTypes } from "../../types/default"

const ToolBoxRoot:React.FC<childrenTypes> = ({children})=>{
    return(
        <section className="mainTools">{children}</section>
    )
}
export default ToolBoxRoot