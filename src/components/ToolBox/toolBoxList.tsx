import '../../styles/main.css'
import React from "react"
import { childrenTypes } from "../../types/default"


const ToolBoxForm:React.FC<childrenTypes> = ({children})=>{
    return(
        <ul id="mainToolsList" className="mainToolsList">{children}</ul>
    )
}
export default ToolBoxForm