import React from 'react'
import ReactDOM from 'react-dom/client'
//import { App } from './App.jsx'
/* import {
  AppControlledUncontrolledComponents as AppConUncontrolled
} from './App-controlled-uncontrolled-components.jsx' */
import { AppHoc } from './AppHoc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppHoc />
    {/* <AppConUncontrolled /> */}
    {/* <App /> */}
  </React.StrictMode>,
)
