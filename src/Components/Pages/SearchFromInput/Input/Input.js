import React from 'react';
// import './Input.scss';

//add props
const Input = (props) => {

    return (
        <div className='inputContainer'>

            <label 
                htmlFor='byName'
                className='inputLabel'>
                Search By Event Name:
            </label>

            <input 
                value={props.inputValue}
                onChange={event => {props.onChange(event.target.value)}}
                className='inputField'
                type='text'
                id='byEventName'>
            </input>

        </div>
    )
}

export default Input;
