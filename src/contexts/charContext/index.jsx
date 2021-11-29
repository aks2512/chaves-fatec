import React from 'react';

import useChar from '../../hooks/useChar/index';

const CharContext = React.createContext({});

function CharProvider({children}) {
    const { search, setSearch, characters, setCharacters, filteredCharacters, setFilteredCharacters, removeCard, searchCard, addCard } = useChar();

    return (
        <CharContext.Provider value={{ search, setSearch, characters, setCharacters, filteredCharacters, setFilteredCharacters, removeCard, searchCard, addCard }}>
            {children}
        </CharContext.Provider>
    );
}

export { CharContext, CharProvider };