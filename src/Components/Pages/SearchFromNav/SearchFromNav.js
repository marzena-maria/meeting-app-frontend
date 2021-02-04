import React from 'react';
import './SearchFromNav.scss';
import axios from 'axios';

const SearchFromNav = ({ setEvents }) => {

    const options = ['music', 'books', 'sport', 'languages', 'other', 'online'];

    const getOption = async (option) => {
        try {
            let response;
            switch(option) {
                case 'online':
                    response = await axios.get(`/events/search-events/online`);
                    break;
                    default:
                    response = await axios.get(`/events/search-events/category/${option}`);
                    break;
            }
            setEvents(response.data);
        }
        catch (error) {
            console.log(error)
        }      
    };



    return (
        <div>
            <div>
                <ul className='optionsToClick'>
                    {options.map(option => (    
                        <li
                        className='optionField'
                        onClick={() => getOption(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
                
            </div>

        </div>
    )
};

export default SearchFromNav;
