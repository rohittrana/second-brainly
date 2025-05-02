import { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon?: ReactElement;
  onClick?: () => void;
  isActive?: boolean;
}

export function SidebarItem({
  text,
  icon,
  onClick,
  isActive = false
}: SidebarItemProps) {
  return (
    <div 
      className={`flex items-center py-2 cursor-pointer rounded max-w-48 pl-4 transition-all ${
        isActive 
          ? "bg-purple-100 text-purple-600" 
          : "text-gray-700 hover:bg-slate-300"
      }`}
      onClick={onClick}
    >
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
}