import React, {createContext, useState} from 'react';

import data from '../lorem-data';

export const LoremContext = createContext({
    paragraphs: [],
    generateParagraphs: (newValue) => {},
})

export default props => {
    const [displayedParagraphs, setDisplayedParagraphs] = useState([]);

    const onGenerateParagraphsHandler = (newValue) => {
        setDisplayedParagraphs(prev => {
            let newArray = [...prev];
            while(newArray.length < newValue) {
                newArray = newArray.concat(data);
            }
            return newArray.slice(0, newValue);
        })
    }

    return(
        <LoremContext.Provider value={{
            paragraphs: displayedParagraphs,
            generateParagraphs: onGenerateParagraphsHandler,
        }}>
            {props.children}
        </LoremContext.Provider>
    )
}