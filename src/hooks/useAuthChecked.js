import { setUser } from "@/store/api/auth/authSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


function useAuthChecked() {
    const dispatch = useDispatch()
    const [authChecked,setAuthChecked] = useState(false)
    useEffect(()=>{
        const localAuth = localStorage?.getItem('auth')
        if(localAuth) {
            const auth = JSON.parse(localAuth)
            if(auth?.accessToken) {
                dispatch(
                    setUser({
                        token:auth.accessToken
                    })
                )
            }
        }
        setAuthChecked(true)
    },[dispatch,authChecked])
  return authChecked
}

export default useAuthChecked