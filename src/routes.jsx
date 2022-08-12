import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/Dashboard/admin/Users';
import Home from './pages/Home';
import SignUp from './pages/Registration/SignUp';
import NotFound from './pages/NotFround/NotFound';
import Dashboard from  './pages/Dashboard/admin/Dashboard';
import Settings from './pages/Dashboard/admin/Settings';
import Orders from './pages/Dashboard/admin/Orders';
import Statistics from './pages/Dashboard/admin/Statistics';
import DashHome from './pages/Dashboard/admin/Home'
import SignIn from './pages/Registration/SignIn'
function Navigation (){


return(
    <Routes>
    {/* <Route path='/' element={<App />}></Route> */}
    <Route path='/' element={<Home />}></Route>
    <Route path='/signUp' element = {<SignUp />}></Route>
    <Route path='/signIn' element = {<SignIn />}></Route>
    <Route path ='/admin/dashboard/users' element = {<Users />}></Route>
    <Route path ='/admin/dashboard/settings' element = {<Settings />}></Route>
    <Route path ='/admin/dashboard/statistics' element = {<Statistics />}></Route>
    <Route path ='/admin/dashboard/orders' element = {<Orders/>}></Route>
    <Route path ='/admin/dashboard/home' element = {<DashHome/>}></Route>
    <Route path = '*' element = {<NotFound />}></Route>
    
  </Routes>
)


}
export default Navigation;