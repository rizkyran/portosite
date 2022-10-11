import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Head from '../components/head'

export const MainRouter = (props) => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Head {...props} />}
        />
        <Route
          path='/#about'
          element={<></>}
        />
      </Routes>
    </Router>
  )
}
