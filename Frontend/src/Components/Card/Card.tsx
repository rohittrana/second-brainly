import { useEffect } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

interface CardProps {
  id: string;
  title: string;
  link: string;
  type: "youtube" | "twitter";
  onShare?: () => void;
  onDelete?: (id: string) => void; 
}

interface TwitterWidgets {
  load: () => void;
}

interface WindowWithTwitter extends Window {
  twttr?: {
    widgets?: TwitterWidgets;
  };
}


const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
};

export const Card = ({ id, title, link, type, onDelete }: CardProps) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  useEffect(() => {
 
    if (type === "twitter") {
      const windowWithTwitter = window as WindowWithTwitter;
      
    
      if (!windowWithTwitter.twttr) {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => {
     
          if (windowWithTwitter.twttr?.widgets) {
            windowWithTwitter.twttr.widgets.load();
          }
        };
        document.head.appendChild(script);
      } else {
      
        if (windowWithTwitter.twttr.widgets) {
          windowWithTwitter.twttr.widgets.load();
        }
      }
    }
  }, [type]);

  return (
    <div className="bg-white rounded-md max-w-96 outline-gray-200 border p-8 min-h-48 min-w-72">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          {type === "youtube" && <YoutubeIcon />}
          {type === "twitter" && <TwitterIcon />}
          {title}
        </div>

        <div className="flex items-center gap-2">
          <ShareIcon btnSize="lg" />
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
         
          </a>
          <DeleteIcon onclick={handleDelete} />
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && (
          <div className="relative w-full h-60">
            <iframe
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(link)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {type === "twitter" && (
          <div className="twitter-embed-container h-60 overflow-hidden">
            <blockquote 
              className="twitter-tweet h-full" 
              data-theme="light"
              data-dnt="true"
              data-cards="hidden"
              data-conversation="none"
            >
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};