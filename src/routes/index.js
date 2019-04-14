import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';


export default [
  {
    name: '',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    path: '/dashboard'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
]