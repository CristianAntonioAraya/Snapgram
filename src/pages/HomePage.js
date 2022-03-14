import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Background from '../componets/Background'

const HomePage = () => {

    const [textInput, setTextInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = ( e ) => {
        e.preventDefault()
        if( textInput === ''){
            Swal.fire({
                text: 'Need to send something!',
                icon: 'error'
            })
        }
        else{
            navigate(`/search/${textInput}`)
        }
        setTextInput('')
    }

    return (
        <div className='home__container'>
            <Background/>
            <div className='home__box'>
                <h2 className='home__title'>Snapgram</h2>
                <form onSubmit={handleSubmit} className='home__form'>
                    <input className='home__input' value={textInput} onChange={ (e) => setTextInput( e.target.value )}/>
                    <button className='home__button' type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage

