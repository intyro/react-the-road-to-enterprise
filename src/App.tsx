import { Link, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

const Contact = lazy(() => import('./views/Contact'))
const About = lazy(() => import('./views/About'))
const Home = lazy(() => import('./views/Home'))

function App() {
  return (
    <div className="App mx-auto max-w-6xl text-center my-8">
      <h1 className="font-semibold text-2xl">React - The Road To Enterprise</h1>

      <div className="my-8">
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Suspense fallback={<div className="flexjustify-center">Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
