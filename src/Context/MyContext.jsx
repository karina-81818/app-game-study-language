import { createContext, useEffect, useState } from "react";
import Get from '../Servise/Get'
import Post from "../Servise/Post";

export const MyContext = createContext()

export function ComponentContext({children}) {
    const [words, setWords] = useState(false)
    const value = {words, setWords}

    useEffect(()=>{
        getWordsServer()
    }, [])
    
    async function getWordsServer(){
        const wordsServer = await Get.getWords();
        setWords(wordsServer)
    }
    if(!words){
        return <h1>Loading.....</h1>
    }

    return <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
}

