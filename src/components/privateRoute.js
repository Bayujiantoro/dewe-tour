import { Outlet, Navigate } from 'react-router-dom'


const auth = () => {
  return localStorage.getItem('admin') === "isAdmin" ;
}

const PrivateAdmin = ({element: Component, ...rest}) => {
    

    return auth() ? <Outlet /> : <Navigate to="/" />
} 

export default PrivateAdmin