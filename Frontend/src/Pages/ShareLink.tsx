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

  if (loading) return <div className="p-4 text-lg">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Shared by: {username}</h2>
      <div className="flex gap-4 flex-wrap">
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
  );
}
