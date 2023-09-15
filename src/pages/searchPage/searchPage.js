import React from 'react';
import './searchPage.css';
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>Filter</h2>
        </div>
        <hr/>
        
    </div>
  )
};

export default SearchPage;