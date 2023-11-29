import React from 'react'
import ReactDOM from 'react-dom/client'
//import { App } from './App.jsx'
import {
  AppControlledUncontrolledComponents as AppConUncontrolled
} from './App-controlled-uncontrolled-components.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppConUncontrolled />
    {/* <App /> */}
  </React.StrictMode>,
)
