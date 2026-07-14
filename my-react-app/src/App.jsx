import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [language, setLanguage] = useState('en'); // 'en' = English, 'es' = Spanish

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
      />
      {activeTab === 'about' ? (
        <About language={language} />
      ) : (
        <Home
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          language={language}
        />
      )}
    </>
  )
}

export default App
