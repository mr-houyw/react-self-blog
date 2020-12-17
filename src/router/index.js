import App from '../App';
import Home from '../pages/home/home';
import Index from '../pages/Index/Index';

const routeConfig = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Index,
      indexRoute: { component: Index },
    },
    {
      path: '/home',
      component: Home,
    },
  ],
}
export default routeConfig