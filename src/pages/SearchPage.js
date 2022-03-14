import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Background from '../componets/Background'
import { searchData } from '../utils/GetData'

const SearchPage = () => {

  const {searchText} = useParams()
  const [loadedImages, setLoadedImages] = useState([])
  const [inputText, setInputText] = useState('')
  
  const navigate = useNavigate()

  useEffect(() => {
    const loadData = async() => {
      if( searchText !== null || searchText !== ''){
        const resp = await searchData(searchText)
        if(resp.photo.length !== 0) {
          setLoadedImages(resp.photo)
        }
        else{
          Swal.fire({
            title: 'Oops!',
            text: 'No results found ',
            icon: 'error',
            timer: '1500',
            showConfirmButton: false
          })
          setInputText('')
        }
      }
      else{
        return
      }
    }
    loadData()
  }, [searchText])
  

  const handleOnSubmit = async (e) =>{
    e.preventDefault()
    if(inputText !== ''){
      const resp = await searchData(inputText)
      navigate(`/search/${inputText}`)
    }
    else{
      return
    }
  }

  return (
    <div className='search__container'>
        <Background/>
        <div className='search__box'>
            <form className='search__form' onSubmit={handleOnSubmit}>
              <h2 className='search__title' onClick={ () => navigate('/')}>SnapGram</h2>
              <div className='search__input-container'>
                <input className='search__input' value={inputText} onChange={ (e) => setInputText(e.target.value)}/>
                <button className='search__button' type='submit' >submit</button>
              </div>
            </form>
            <p className='search__text'>Show results for '{searchText}'</p>
            <div className='search__content'>
              <div className='search__images'>
                {
                  loadedImages.length === 0 
                  ? <p>Loading</p> 
                  : loadedImages.map( item => (
                    <img className='search__image' key={item.id} srcSet={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt="Img"/>
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPage