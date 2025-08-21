import { BACKEND_URL } from "../../config";
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from "react";

interface ContentType {
  type: "twitter" | "youtube";  
  title: string;
  link: string;
  _id: string;
}

export function UseContent() {
  const [contents, setContents] = useState<ContentType[]>([]); 

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BACKEND_URL}api/v1/content`, {
        data: { contentId: id },
        headers: {
          Authorization: localStorage.getItem("token"),
        }      
      });
      refresh();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log("Error deleting content:", error.message);
      } else if (error instanceof Error) {
        console.log("Error deleting content:", error.message);
      } else {
        console.log("Error deleting content:", "An unexpected error occurred");
      }
    }
  };

  const refresh = () => {
    axios
      .get(`${BACKEND_URL}api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      })
      .catch((error: unknown) => {
        if (error instanceof AxiosError) {
          console.log("Error fetching content:", error.message);
        } else if (error instanceof Error) {
          console.log("Error fetching content:", error.message);
        } else {
          console.log("Error fetching content:", "An unexpected error occurred");
        }
      });
  };

  useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 10 * 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
   
  return { contents, refresh, handleDelete };
}