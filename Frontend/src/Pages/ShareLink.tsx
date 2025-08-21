import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios, { AxiosError } from "axios";
import { Card } from "../Components/Card/Card";

interface ContentItem {
  _id: string; 
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
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setError(error.message || "Something went wrong");
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (shareLink) fetchContent();
  }, [shareLink]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
          <p className="text-white text-lg font-medium">Loading shared content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 max-w-md mx-4">
          <div className="text-red-400 text-xl font-semibold mb-2">Oops! Something went wrong</div>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm font-medium">Shared Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {username}'s
            </span>
          </h1>
          <p className="text-xl text-white/70 font-light">Curated Collection</p>
          
   
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{content.length}</div>
              <div className="text-sm text-white/60">Items Shared</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {content.filter(item => item.type === 'youtube').length}
              </div>
              <div className="text-sm text-white/60">Videos</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {content.filter(item => item.type === 'twitter').length}
              </div>
              <div className="text-sm text-white/60">Tweets</div>
            </div>
          </div>
        </div>

  
        {content.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {content.map((item, index) => (
              <div 
                key={item._id}
                className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative group">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Card
                      id={item._id}
                      title={item.title}
                      link={item.link}
                      type={item.type}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No content shared yet</h3>
            <p className="text-white/60">This collection is empty.</p>
          </div>
        )}
        <div className="text-center mt-20 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Powered by Second Brain • Share your knowledge, inspire others
          </p>
        </div>
      </div>
    </div>
  );
}