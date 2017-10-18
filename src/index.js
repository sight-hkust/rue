/*eslint-disable no-unused-vars*/
import React from 'react'
import ReactDOM from 'react-dom'
import createStoreWithMiddleware from './services/store'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
/*eslint-enable no-unused-vars*/

/*
	`history` is a JavaScript library that lets you easily
	manage session history anywhere JavaScript runs. it
	abstracts away the differences in various environments and
	provides a minimal API that lets you manage the history stack,
	navigate, confirm navigation, and persist state between sessions.
*/
const history = createHistory()

/*
	This is the root for rendering the React application,
	the `Provider` component imported from `react-redux`
	exposes the global state tree (a.k.a the store) to all
	of its chlid components, read more at
	http://redux.js.org/docs/advanced/UsageWithReactRouter.html#connecting-react-router-with-redux-app
*/
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(history)}>
    <LocaleProvider locale={enUS}>
      <App history={history} />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
