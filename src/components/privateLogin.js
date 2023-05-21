import { Outlet, Navigate } from 'react-router-dom'

const auth = () => {
  return localStorage.getItem('admin') === "noAdmin" ;
}


const PrivateLogin = ({element: Component, ...rest}) => {
    

    return auth() ? <Outlet /> : <Navigate to="/" />
} 

export default PrivateLogin;