import Loading from "@/components/Loading"
import Card from "@/components/ui/Card"
import fetchWrapper from "@/util/fetchWrapper"
import { dateTime } from "@/util/helpers"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Message() {
    const {id} = useParams()
    const [message,setMessage] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchWrapper(`contact/${id}`);
                setMessage(response.data);
            } catch (error) {
                console.error("Error fetching contact data:", error);
            }
        };

        fetchData();
    }, [id]);
   // console.log(message.email);
   if(!message?.message) {
    return <Loading/>
   }
    
  return (
    <>
      <Card>
      <div><span className="font-bold">Sender:</span> <a href="#" className="hover:text-blue-500 hover:underline">{message?.email}</a></div>
       <div><span className="font-bold">Name:</span> {message?.firstName} {message?.lastName}</div>
       <div><span className="font-bold">Subject:</span> {message?.subject}</div>
       <div><span className="font-bold">Time:</span> {dateTime(message?.createdAt)}</div>
       <div className="font-bold">Message:</div>
       <div className="bg-gray-100 p-4 rounded-md shadow-lg">
        {message?.message}
       </div>
      </Card>
    </>
  )
}

export default Message