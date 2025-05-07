import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Card } from "../Components/Card/Card";

interface ContentItem {
  _id?: string; // optional if not used in all places
  link: string;
  type: "youtube" | "twitter";
  title: string;
}

export function ShareLink() {
  const { shareLink } = useParams<{ shareLink: string }>();
  const [username, setUsername] = useState("");
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}api/v1/brain/${shareLink}`);
        setUsername(res.data.username);
        setContent(res.data.content);
      } catch (e: any) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (shareLink) fetchContent();
  }, [shareLink]);

  if (loading) return <div className="p-4 text-lg text-white">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="relative min-h-screen w-full">
  
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-20 bg-gray-900"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      
      <div className="relative h-full w-full bg-slate-800"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
    
      <div className="relative z-10 p-6">
       <div className="bg-white rounded-md flex justify-center w-80 h-12 m-3 "><h1 className="text-black"> Share by:{username}</h1></div>
        <div className="flex gap-4 flex-wrap ">
          {content.map((item) => (
            <Card
              key={item._id}
              title={item.title}
              link={item.link}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}