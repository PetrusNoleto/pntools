
import DecriptWithCryptoJs from "../boxes/crypto/decryptWithCryptoJs"
import EncriptWithCryptoJs from "../boxes/crypto/encryptWithCryptojs"
import { ToolBox } from "./toolBox"


const ToolBoxComponent = ()=>{
    return(
        <ToolBox.root>
            <ToolBox.list>
                <ToolBox.listItem>
                   <EncriptWithCryptoJs  />
                </ToolBox.listItem>
                <ToolBox.listItem>
                <DecriptWithCryptoJs/>
                </ToolBox.listItem>
            </ToolBox.list>
        </ToolBox.root>
    )
}
export default ToolBoxComponent