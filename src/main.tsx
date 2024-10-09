import React from 'react'
import ReactDOM  from 'react-dom/client'
import './styles/index.css'
import './styles/destyle.css'
import { TopPage } from "./components/pages/TopPage/TopPage"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopPage/>
    </React.StrictMode>,
)
