import '@assets/css/index.scss'
import '@assets/css/responsive.scss'
import { GoogleOAuthProvider } from '@react-oauth/google'
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
    <GoogleOAuthProvider clientId='186777543463-oovco84fduga3duepakf6difigao9di4.apps.googleusercontent.com'>
      <SkeletonTheme baseColor="#c1c1c1" highlightColor="#dcdcdc">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </GoogleOAuthProvider>
  </Provider>,
)
