import { useState } from "react"
import { decriptDataWithCryptoJs } from "../../../functions/decriptDataWithCryptoJs"

const DecriptWithCryptoJs = ()=>{
        const [primaryInputData, setPrimaryInputData] = useState("")
        const [secundaryInputData, setSecundatyInputData]= useState("")
        const [resultData,setResultData]=useState("")
        const [showResult,setShowResult] = useState(false)
        const [copyButtonValue, setCopyButtonValue] = useState("copiar")  
        const sendForDecriptData = async ()=>{
            const getEncriptedData = await decriptDataWithCryptoJs(primaryInputData,secundaryInputData)
            setResultData(getEncriptedData)
            setShowResult(true)
        }
        const copyToClip = ()=>{
            navigator.clipboard.writeText(resultData);
            setCopyButtonValue("copiado")
        }
        return(
            <div className="toolBox">
                <h3 className="toolBoxTitle">descriptografar dados usando crypto-js</h3>
                <p className="toolBoxDescription">descriptografe dados usando crypto js coloque a sua  secret key e os dados que quer descriptrografar nos campos abaixo</p>
                <form className="toolBoxForm" id="formConvertPXtoRem">
                    <label className="toolBoxFormLabel" htmlFor="decriptSecretKey">
                        <p className="toolBoxFormLabelDescription">digite sua secret key</p>
                        <input name="decriptSecretKey" id="decriptSecretKey" className="toolBoxFormLabelInput toolPxToRemGetFontSize" type="text" placeholder='digite sua secret key' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setPrimaryInputData(event.target.value)}} value={primaryInputData} required/>
                    </label>
                    <label className="toolBoxFormLabel" htmlFor="decriptData">
                         <p className="toolBoxFormLabelDescription">digite os dados que deseja descriptografar</p>
                         <input name="decriptData" id="decriptData" className="toolBoxFormLabelInput toolPxToRemGetPixels" type="text" placeholder='digite seus dados' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setSecundatyInputData(event.target.value)}} value={secundaryInputData} required />
                    </label>
                    <button className="toolBoxFromButton" type="button" onClick={sendForDecriptData}>descriptografar</button>
                </form>
                {showResult == true?
                     <div className="mainToolsResult"><span className="mainToolsResultValue toolPxToRemResult">{resultData}</span><button type="button" className="mainToolsResultValueCopy" onClick={copyToClip}>{copyButtonValue}</button></div>
                    :
                    <></>
                }
            </div>
        )
}
export default DecriptWithCryptoJs 