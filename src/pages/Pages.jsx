import React from 'react'
import Home from './Home'
import AppleNew from './AppleNew'
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
    return (
            <Routes>
                <Route path='/' element={ <Home /> }/> 
                <Route path='/applenews/:type' element={ <AppleNew /> }/>
            </Routes>
    )
}

export default Pages
