import '@assets/css/index.scss'
import { App } from '@components/App'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './redux/store'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
