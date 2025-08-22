import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import useFetch from './useFetch'

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
      <Header searchTerm={search} setSearchTerm={setSearch} />
      <Hero searchTerm={search} />
      <Footer />
    </>
  )
}

export default App
