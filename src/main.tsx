import '@assets/css/index.scss'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
    <SkeletonTheme baseColor="#c1c1c1" highlightColor="#dcdcdc">
      <RouterProvider router={router} />
    </SkeletonTheme>
  </Provider>,
)
