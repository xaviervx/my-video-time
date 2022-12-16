import React from 'react'
import ReactDOM from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(fas, far)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
