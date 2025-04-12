import fetchWrapper from "@/util/fetchWrapper"
import { humanDate } from "@/util/helpers"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function UserDetails() {
    const {id} = useParams()
   const [user,setUser] =  useState({})
   const [loading,setLoading] = useState(false)
   
   useEffect(()=>{
        const getUser = async () => {
            try {
                setLoading(true)
                const response = await fetchWrapper(`user/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching contact data:", error);
            } finally{
                setLoading(false)
            }
        }
        getUser()
   },[id])

   console.log("user",user);
  return (
    <div className="space-y-4">
        <div className="flex justify-evenly items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between ">
                <div className="capitalize"><strong>First Name:</strong> {user?.firstName}</div>
               <div className="capitalize"> <strong>Last Name:</strong> {user?.lastName}</div>
               <div> <strong>Email:</strong> {user?.email}</div>
               <div> <strong>Phone:</strong> {user?.phoneNumber?user?.phoneNumber:"N/A"}</div>
               <div className="capitalize"> <strong>Address:</strong> {user?.address?user?.address:"N/A"}</div>
               <div> <strong>date Of Birth:</strong> {user?.dateOfBirth ? humanDate(user?.dateOfBirth) : "N/A"}</div>
               <div className="capitalize"> <strong>User Type:</strong> {user?.userType}</div>
               <div>
                <strong>User Status:</strong> {user?.userStatus}
               </div>
               <div> <strong>agent code:</strong> {user?.agent_code ? user?.agent_code : "N/A"}</div>
            </div>
        </div>
    </div>
  )
}

export default UserDetails