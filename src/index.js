/*eslint-disable no-unused-vars*/
import React from 'react' 
import ReactDOM from 'react-dom'
import createStoreWithMiddleware from './services/store'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux' 
import './index.css'
import App from './App' 
import registerServiceWorker from './registerServiceWorker'
/*eslint-enable no-unused-vars*/

const history = createHistory()

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(history)}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
