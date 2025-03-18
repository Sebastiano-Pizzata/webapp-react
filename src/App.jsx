import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'

import { GlobalProvider } from './context/GlobalContext'

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes >
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/movies/:id' Component={MoviePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
