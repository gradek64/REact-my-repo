import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  language: languageOptions[1], //defualt ger
  dictionary: dictionaryList[languageOptions[1].id],
});

// it provides the language context to app
export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function translate(text) {
  const languageContext = useContext(LanguageContext);

  // this below object is divided in two
  /* languageContext.dictionary = language as id
  languageContext.dictionary[text] = [language][text] 

    languageContext ={
      de:{
        hi:allo
      }
      pl:{
        hi:czesc
      }
    }
  
  */

  return languageContext.dictionary[text];
}
