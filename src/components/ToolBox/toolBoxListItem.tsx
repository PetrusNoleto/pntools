import '../../styles/main.css'
import React from "react"
import { childrenTypes } from "../../types/default"

const ToolBoxFormItem:React.FC<childrenTypes> = ({children})=>{
    return(
        <li className="mainToolsListItem">{children}</li>
    )
}
export default ToolBoxFormItem