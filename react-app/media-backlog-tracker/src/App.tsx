import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import View from './pages/View';
import Add from './pages/Add';
import Update from './pages/Update';
import Remove from './pages/Remove';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('add')}>Add</button>
        <button onClick={() => setPage('view')}>View</button>
        <button onClick={() => setPage('update')}>Update</button>
        <button onClick={() => setPage('remove')}>Remove</button>
      </nav>
      {page === 'home' && <Home />}
      {page === 'view' && <View />}
      {page === 'add' && <Add />}
      {page === 'update' && <Update />}
      {page === 'remove' && <Remove />}
    </>
  )
}

export default App
