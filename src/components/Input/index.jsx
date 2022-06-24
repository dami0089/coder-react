import React from 'react';
import './style.css';

const Input = ({valorPlaceholder, title}) => {

    // console.log(props);

    return (
        <input 
        placeholder={valorPlaceholder + title}
        className='app-input'
        
        
        />
    )
}

export default Input
