import React from 'react';
import './search-box.styles.css';

// made placeholder a prop that can be passed in so that the component can be used anywhere.

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);