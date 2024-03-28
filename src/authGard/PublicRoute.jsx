import useAuth from '@/hooks/useAuth'

import { Navigate } from 'react-router-dom'

function PublicRoute({children}) {
    const isLoggedIn = useAuth()
    console.log("i am public route");
  return !isLoggedIn? children: <Navigate to='/dashboard' />
}

export default PublicRoute