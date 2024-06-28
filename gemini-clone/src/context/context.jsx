import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [Input,setInput] = useState("")
    const [RecentPrompt, setRecentPrompt] = useState("")
    const [PrevPrompts, setPrevPrompts] = useState([])
    const [ShowResults, setShowResults] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [ResultData, setResultData] = useState("")

const delayPara = (index, nextWord) =>{
    setTimeout(function() {
        setResultData(prev=>prev+nextWord)
    }, 75*index);
}

const newChat = () => {
    setLoading(false);
    setShowResults(false);
}

const onSent = async(prompt)=>{
    setResultData("");
    setLoading(true);
    setShowResults(true);
    let response;
    if(prompt !== undefined){
        response = await runChat(prompt);
        setRecentPrompt(prompt)
    }else{
        setPrevPrompts(prev=>[...prev, Input]);
        setRecentPrompt(Input);
        response = await runChat(Input);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    for(let i =0 ; i < responseArray.length ; i++){
        if(i===0 || i%2!== 1){
            newResponse += responseArray[i];
        }else{
            newResponse += "<b>" + responseArray[i] + "</b>";
        }
    }
    let newResponse2 = newResponse.split("*").join("</br>"); 
    let newResponseArray = newResponse2.split(" ");
    for(let i = 0;i<newResponseArray.length;i++){
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord+" ");
    }
    setLoading(false);
    setInput("");
}
const contextValue = {
        PrevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        RecentPrompt,
        ShowResults,
        Loading,
        ResultData,
        Input,
        setInput,
        newChat
    } 

return(
    <Context.Provider value = {contextValue}>
        {props.children}
    </Context.Provider>
)

}
export default ContextProvider;