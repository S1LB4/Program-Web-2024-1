import './style.css'
import {createRoot } from "react-dom/client"
import App from './App'
import React from 'react'

const appContainer = document.querySelector("#app")
const root = createRoot(appContainer)

root.render(<App />) ;
console.log("Hello World")