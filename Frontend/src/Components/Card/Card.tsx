import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="bg-white rounded-md max-w-96 outline-gray-200 border p-8 min-h-48 min-w-72">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <DocumentIcon />
          {title}
        </div>

        <div className="flex items-center gap-2">
          <ShareIcon btnSize="lg"  />
          <a href={link} target="_blank" />
          <DeleteIcon />
        </div>
      </div>

      <div className="pt-4">
        {/* Render YouTube embed if type is "youtube" */}
        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {/* Render Twitter embed if type is "twitter" */}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
