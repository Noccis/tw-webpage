import React, { useState } from 'react'
import i18next from 'i18next';
import { MdLanguage } from "react-icons/md";

const LanguageHandler = () => {

    const en = 'English please';
    const sv = 'Svenska tack';

    const [language, setLanguage] = useState(en)


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
            }}  >{language}</button>
        </div>
    )
}

export default LanguageHandler