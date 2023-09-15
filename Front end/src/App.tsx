import { useState } from 'react'
import './App.scss'
import Header from './components/update/Modal/header';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Header />
      Hi, how are you doing today this is our application that is pretty cool. I am trying to fit more words on the screen 
    </div>
    
  )
}

export default App
