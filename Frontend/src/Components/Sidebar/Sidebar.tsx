import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useState } from "react";
import { Button } from "../Button/Button";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Academic } from "../icons/Academic-cap";
interface SidebarProps {
  onFilterSelect: (filter: "all" | "twitter" | "youtube") => void;
}

export function Sidebar({ onFilterSelect }: SidebarProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter: "all" | "twitter" | "youtube") => {
    setActiveFilter(filter);
    onFilterSelect(filter);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${BACKEND_URL}api/v1/logout`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      localStorage.removeItem("token");
      window.location.href = "/"; 
    } catch (error) {
      console.error("Logout failed:", error);
      localStorage.removeItem("token");
      window.location.href = "/"; 
    }
  };


  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 flex flex-col shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="text-purple-600">
            <Academic></Academic>
          </div>
          <div className="font-semibold text-xl text-purple-600"> Second Brain</div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <p className="text-xs uppercase font-medium text-gray-500 mb-4 pl-2">Content</p>
        <div className="space-y-1">
          <SidebarItem
            text="All Content"
            isActive={activeFilter === "all"}
            onClick={() => handleFilterClick("all")}
          />
          <SidebarItem
            text="Twitter"
            icon={<TwitterIcon />}
            isActive={activeFilter === "twitter"}
            onClick={() => handleFilterClick("twitter")}
          />
          <SidebarItem
            text="Youtube"
            icon={<YoutubeIcon />}
            isActive={activeFilter === "youtube"}
            onClick={() => handleFilterClick("youtube")}
          />
        </div>
      </nav>

      <div className="p-4 border-t">
        <Button
          variant="secondary"
          size="md"
          text="Logout"
          onClick={handleLogout}
          className="w-full bg-gray-200 hover:bg-red-500 hover:text-white transition-all duration-300"
        />
       
      </div>
    </div>
  );
}