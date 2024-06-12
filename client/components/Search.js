"use client"

import React, { useState } from 'react';
import axios from "axios";
import { getSearchedArticle } from '../apis/apis';


const Search = ({setArticle }) => {

  const [data, setData] = useState("");

  const searchArticle = async () => {
    try {
        const response = await getSearchedArticle({data});
        setArticle(response?.result);
    } catch (error) {
        console.log('search error >>', error);
    }
  
  };

  return (
    <div className="m-4">
        <input type="search" 
               className='p-2 me-3'
               placeholder='Search by title'
               value={data}
               onChange={(e) => setData(e.target.value)}
                />
        <button className='btn btn-outline-primary'onClick={searchArticle} >
            Search
        </button>
      </div>
  )
}

export default Search;
