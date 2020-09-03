import Home from '../container/App';
import About from '../components/About';
import Login from '../components/Login';

let routes = [
    {path: '/',components:Home,exact:true},
    {path: '/about',component:About},
    {path: '/login',component:Login}
];
export default routes;