import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('aamo-app'))

serviceWorker.unregister();
