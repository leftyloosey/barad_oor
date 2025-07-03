import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'

import Mutate from './pages/Mutate'
import RestfulMutate from './pages/RestfulMutate'
import Query from './pages/Query'
import Restful from './pages/Restful.jsx'
import App from './App.jsx'

const client = new ApolloClient({
  // uri: '/',
  uri: 'http://localhost:5002',
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/mutate' element={<Mutate />} />
          <Route path='/restfulmutate' element={<RestfulMutate />} />
          <Route path='/query' element={<Query />} />
          <Route path='/restful' element={<Restful />} />
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
)
