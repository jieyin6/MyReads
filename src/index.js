import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import reducer from './redux/reducers/index'
import './index.css'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'
))
