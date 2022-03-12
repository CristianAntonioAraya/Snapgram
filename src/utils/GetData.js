import axios from "axios"

const API_URL = 'https://www.flickr.com/services/rest'
const method = 'flickr.photos.getRecent'
const key = process.env.REACT_APP_API_KEY

export const getData = () => {
    console.log(key)
    try {
        return(
            axios.get(`${API_URL}/?method=${method}&per_page=20&nojsoncallback=1&format=json&api_key=${key}`)
            .then( ({data}) => {
                return data.photos;
            })
        )
    } catch (error) {
        console.log(error)
    }
}