import React, { useState } from 'react';
//import '/SearchFromInput.scss';

import Input from './Input/Input';

//parent component

const SearchFromInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [events, setEvents] = useState([]); //array?

    console.log(inputValue);
    console.log(events);

    //const url = ??? 

    // useEffect(() => {

    // }, [inputValue]);

    //fetch

    return (
        <div>
            <p>Search From Input</p>
            <Input onChange={value => setInputValue(value)} />
        </div>
    )

};

export default SearchFromInput;