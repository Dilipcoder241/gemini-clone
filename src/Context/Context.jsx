import { createContext, useState } from "react";
import run from "../Gemini/gemini";

export const Context = createContext()

const ContextProvider = (props)=>{

    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [showresult, setshowresult] = useState(false);
    const [result, setResult] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [prevQuestion, setPrevQuestion] = useState("");
    const [userData, setuserData] = useState("");


    // const delaypera = (index , nextword) =>{
    //     setTimeout(function(){
    //         setResult(prev => prev+nextword);
    //     }, 75*index)
    // }


    const onSent = async (question) =>{
        setResult("");
        setLoading(true);
        setPrevQuestion(prompt);
        setshowresult(true);
        let data = await run(question || prompt);
        setPrompt("");
        let newdata = data.split("**"); 
        let newArray="";
        for(let i=0;i<newdata.length;i++){
            if(i===0 || i%2 !==1){
                newArray += newdata[i];
            }
            else{
                newArray += "<b>"+newdata[i]+"</b>";
            }
        }
        let response = newArray.split("*").join("</br>");
        setResult(response);
        {prompt && setPrevPrompts([prompt ,...prevPrompts])}
        setLoading(false);
    }

    const contextValues = {
        prompt,
        setPrompt,
        loading,
        result,
        prevPrompts,
        onSent,
        prevQuestion,
        setPrevQuestion,
        setResult,
        showresult,
        userData,
        setuserData
    }

    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;