import Home from '@/pages/home'
import ReactLifecycle from '@/pages/react/lifecycle'
import ReactHooks from '@/pages/react/hooks'
import Todos from '@/pages/immutable/todos'
// import ReactHOC from '@/pages/react/hoc'

interface IRouteObj {
  path: string
  exact?: boolean
  component: any
}
const routes: IRouteObj[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/react/lifecycle',
    component: ReactLifecycle,
  },
  {
    path: '/react/hooks',
    component: ReactHooks,
  },
  // {
  //   path: '/react/hoc',
  //   component: ReactHOC,
  // },
  {
    path: '/immutable/todos',
    component: Todos,
  },
]
export default routes