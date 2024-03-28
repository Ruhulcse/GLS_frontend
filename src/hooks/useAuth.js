import { useSelector } from "react-redux"


function useAuth() {
    const auth = useSelector((state)=>state.auth)
    console.log("i an auth hook",auth);
  if(auth) {
    return true
  }
  else {
    return false
  }
}

export default useAuth