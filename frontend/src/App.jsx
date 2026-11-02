import './App.css'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App