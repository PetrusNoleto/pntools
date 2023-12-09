import { useState } from "react"
import { encriptDataWithCryptoJs } from "../../../functions/encriptDataWithCryptoJs"

const EncriptWithCryptoJs = ()=>{
        const [primaryInputData, setPrimaryInputData] = useState("")
        const [secundaryInputData, setSecundatyInputData]= useState("")
        const [resultData,setResultData]=useState("")
        const [showResult,setShowResult] = useState(false)
        const [copyButtonValue, setCopyButtonValue] = useState("copiar")
        const sendForEncriptData = async ()=>{
            setCopyButtonValue("copiar")
            const getEncriptedData = await encriptDataWithCryptoJs(primaryInputData,secundaryInputData)
            setResultData(getEncriptedData)
            setShowResult(true)
        }
        const copyToClip = ()=>{
            navigator.clipboard.writeText(resultData);
            setCopyButtonValue("copiado")
        }
        return(
            <div className="toolBox">
                <h3 className="toolBoxTitle">criptografar dados usando crypto-js</h3>
                <p className="toolBoxDescription">criptografe dados usando crypto js coloque a sua  secret key e os dados que quer criptrografar nos campos abaixo</p>
                <form className="toolBoxForm" id="formConvertPXtoRem">
                    <label className="toolBoxFormLabel" htmlFor="encriptSecretKey">
                        <p className="toolBoxFormLabelDescription">digite sua secret key</p>
                        <input name="encriptSecretKey" id="encriptSecretKey" className="toolBoxFormLabelInput toolPxToRemGetFontSize" type="text" placeholder='digite sua secret key' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setPrimaryInputData(event.target.value)}} value={primaryInputData} required/>
                    </label>
                    <label className="toolBoxFormLabel" htmlFor="encriptData">
                         <p className="toolBoxFormLabelDescription">digite os dados que deseja criptografar</p>
                         <input name="encriptData" id="encriptData" className="toolBoxFormLabelInput toolPxToRemGetPixels" type="text" placeholder='digite seus dados' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setSecundatyInputData(event.target.value)}} value={secundaryInputData} required />
                    </label>
                    <button className="toolBoxFromButton" type="button" onClick={sendForEncriptData}>criptografar</button>
                </form>
                {showResult == true?
                     <div className="mainToolsResult"><span className="mainToolsResultValue toolPxToRemResult">{resultData}</span><button type="button" className="mainToolsResultValueCopy" onClick={copyToClip}>{copyButtonValue}</button></div>
                    :
                    <></>
                }
            </div>
        )
}
export default EncriptWithCryptoJs