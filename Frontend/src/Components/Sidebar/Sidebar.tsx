import { BrainIcon } from "../icons/BrainIcon";
import { SidebarItem } from "./SidebarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useState } from "react";
import { Button } from "../Button/Button";
interface SidebarProps {
  onFilterSelect: (filter: "all" | "twitter" | "youtube") => void;
}

export function Sidebar({ onFilterSelect }: SidebarProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter: "all" | "twitter" | "youtube") => {
    setActiveFilter(filter);
    onFilterSelect(filter);
  };

  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      <div className="fixed text-2xl pt-4 flex items-center gap-3">
        <div className="text-purple-600">
          <BrainIcon />
        </div>
        <div>Second Brain</div>
      </div>
      <div className="pt-16 flex flex-col gap-4">
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
      <div className="mb-0">
        <Button variant="secondary" size="md" text="logout"></Button>
      </div>
    </div>
  );
}