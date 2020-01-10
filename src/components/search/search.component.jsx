import React from 'react';
import './search.style.css';

export const Search = ({placeholder, change}) => (
	<input
		className='search'
		type='search'
		placeholder={placeholder}
		onChange={change}
	/>
);
