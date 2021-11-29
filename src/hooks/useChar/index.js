import React from 'react';

export default function useChar() {
    const [search, setSearch] = React.useState('');
    const [characters, setCharacters] = React.useState([
        {
            id: 1,
            name: 'Chaves',
            image: require('../../assets/img/chaves.jpg'),
            phone: '+52 9876-1110'
        },
        {
            id: 2,
            name: 'Chiquinha',
            image: require('../../assets/img/chiquinha.jpg'),
            phone: '+52 9876-1112'
        },
        {
            id: 3,
            name: 'Dona Florinda',
            image: require('../../assets/img/florinda.jpg'),
            phone: '+52 9876-1119'
        },
        {
            id: 4,
            name: 'Quico',
            image: require('../../assets/img/quico.jpg'),
            phone: '+52 9876-1113'
        },
        {
            id: 5,
            name: 'Sr. Barriga',
            image: require('../../assets/img/barriga.jpg'),
            phone: '+52 9876-1114'
        },
        {
            id: 6,
            name: 'Sr. Madruga',
            image: require('../../assets/img/madruga.jpg'),
            phone: '+52 9876-1115'
        },
    ]);
    const [filteredCharacters, setFilteredCharacters] = React.useState(characters);

    React.useEffect(() => {
        setFilteredCharacters(characters)
    },[setFilteredCharacters, characters]);

    function removeCard(id) {
        setCharacters(characters.filter(character => character.id !== id));
        searchCard(search);
    }

    function searchCard(value) {
        setSearch(value);
        setFilteredCharacters(characters.filter(character => character.name.indexOf(value) === 0 || character.phone.indexOf(value) === 0));
    }

    function addCard(name, image, phone) {
        characters.push({id: characters.length + 1, name: name, image: {uri:image}, phone: phone});
        setCharacters(characters);
        searchCard(search);
    }

    return { search, setSearch, characters, setCharacters, filteredCharacters, setFilteredCharacters, removeCard, searchCard, addCard };
}