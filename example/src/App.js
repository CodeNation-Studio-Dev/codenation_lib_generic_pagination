import React, { useState } from 'react'

import { PaginationGeneric } from 'react-generic-pagination'
import 'react-generic-pagination/dist/index.css'

const App = () => {
  const [page , setPage] = useState(1)
  const helloWorld = (page) => {
    setPage(page)
    console.log('pagina', page)
  }
  
  return <PaginationGeneric pagina={page} total={10} hello={helloWorld}/>
}

export default App
