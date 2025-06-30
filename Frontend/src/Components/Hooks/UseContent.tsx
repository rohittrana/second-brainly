import { BACKEND_URL } from "../../config";
import axios from 'axios';
import { useState,useEffect } from "react";
interface ContentType {
   type: "twitter" | "youtube";  
   title: string;
   link: string;
   _id: string;

 }
 
 export function UseContent() {
  const handleDelete = async(id:string)=>{
    try{await 
      await axios.delete(`${BACKEND_URL}api/v1/content`,{
        data:{contentId:id}
,
headers:{
  Authorization:localStorage.getItem("token"),
}      })
refresh();
    }
    catch(error){
      console.log("Error deleting content :" , error);
    }
  }
   const [contents, setContents] = useState<ContentType[]>([]); 
   function refresh() {
     axios
       .get(`${BACKEND_URL}api/v1/content`, {
         headers: {
           Authorization: localStorage.getItem("token"),
         },
       })
       .then((response) => {
         setContents(response.data.content);
       });
   }
 
   useEffect(() => {
     refresh();
     let interval = setInterval(() => {
       refresh();
     }, 10 * 1000);
     return () => {
       clearInterval(interval);
     };
   }, []);
   
   return { contents, refresh, handleDelete };

 }
 