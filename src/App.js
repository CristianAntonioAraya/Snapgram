
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search/:searchText' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App