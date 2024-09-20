import React, { useState } from 'react'
import i18next from 'i18next';
import { MdLanguage } from "react-icons/md";

type LanguageHandlerProps = {
    language: string,
    setLanguage: (language: string) => void
};

const LanguageHandler = ({language, setLanguage} : LanguageHandlerProps) => {
    console.log("Language handler rendering!");

    // Gör om så att komponenten tar in vilket språk den ska välja (samt vad som ska stå) och se till att det är en state i parent.
    const en = 'English please';
    const sv = 'Svenska tack';

    //const [language, setLanguage] = useState(en)


    return (
        <div>
            <MdLanguage />
            <button
            onClick={() => {
                if(language == en){
                    i18next.changeLanguage('en');
                    setLanguage(sv)
                }else{
                    i18next.changeLanguage('sv');
                    setLanguage(en)
                }
                console.log("KLick klick!!!");
            }}  >{language}</button>
        </div>
    )
}

export default LanguageHandler