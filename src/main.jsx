import React from 'react'
import ReactDOM from 'react-dom/client'
//import { App } from './App.jsx'
/* import {
  AppControlledUncontrolledComponents as AppConUncontrolled
} from './App-controlled-uncontrolled-components.jsx' */
// import { AppHoc } from './AppHoc.jsx'
// import { AppCustomHook } from './AppCustomHooks'
import { AppFunctionalProgramming } from './AppFunctionalProgramming.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppFunctionalProgramming />
    {/* <AppCustomHook /> */}
    {/* <AppHoc /> */}
    {/* <AppConUncontrolled /> */}
    {/* <App /> */}
  </React.StrictMode>,
)
