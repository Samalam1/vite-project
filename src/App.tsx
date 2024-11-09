import { useMemo } from 'react'

import './App.css'
import GetFighters from './data/CSVSource'
import { FighterTable } from './components/FighterTable';

function App() {
 

  const fighters = useMemo(() => {return GetFighters()}, []);

  return (
    <>
        <FighterTable fighters={fighters}/>
    </>
  )
}

export default App
