import '@assets/css/index.scss'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import { setupStore } from './redux/store'
import { routes } from './routes'


const store = setupStore()
const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
