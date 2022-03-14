import React from 'react'
import { useParams } from 'react-router-dom'
import Background from '../componets/Background'

const SearchPage = () => {

  const {searchText} = useParams()

  const handleOnSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className='search__container'>
        <Background/>
        <div className='search__box'>
            <form className='search__form' onSubmit={handleOnSubmit}>
              <h2 className='search__title'>SnapGram</h2>
              <div className='search__input-container'>
                <input className='search__input'/>
                <button className='search__button' type='submit' >submit</button>
              </div>
            </form>
            <div className='search__content'>
              <div className='search__images'>
                <p>dsaksaks</p>
                <p>dsaksaks</p>
                <p>dsaksaks</p>
                <p>dsaksaks</p>
                <p>dsaksaks</p>
              </div>
            </div>
        </div>
        <p>{searchText}</p>
    </div>
  )
}

export default SearchPage