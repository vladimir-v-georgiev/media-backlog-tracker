import { useState } from 'react'
import './App.css'

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
      {page === 'add' && <Add />}
      {page === 'view' && <View />}
      {page === 'update' && <Update />}
      {page === 'remove' && <Remove />}
    </>
  )
}

export default App
