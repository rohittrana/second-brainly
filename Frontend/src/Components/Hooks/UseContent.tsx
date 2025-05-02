import { BACKEND_URL } from "../../config";
import axios from 'axios';
import { useState,useEffect } from "react";
interface ContentType {
   type: "twitter" | "youtube";  
   title: string;
   link: string;
   _id?: string;

 }
 
 export function UseContent() {
   const [contents, setContents] = useState<ContentType[]>([]); // 👈 tell TypeScript what’s inside
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
   
   return { contents, refresh };
 }
 