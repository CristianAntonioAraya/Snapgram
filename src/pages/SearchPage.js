import React from 'react'
import { useParams } from 'react-router-dom'
import Background from '../componets/Background'

const SearchPage = () => {

    const {searchText} = useParams()
    console.log(searchText)


  return (
    <div className='search__container'>
        <Background/>
        <div className='search__box'>
            pep
        </div>
        <p>{searchText}</p>
    </div>
  )
}

export default SearchPage