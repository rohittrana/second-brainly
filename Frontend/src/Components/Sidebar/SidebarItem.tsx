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
  isActive = false,
}: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 max-w-56
        ${isActive
          ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md"
          : "text-gray-500 hover:bg-purple-50 hover:text-purple-700"}
      `}
    >
      <div className={`text-xl transition-colors duration-200 ${isActive ? "text-white" : "text-purple-500 group-hover:text-purple-700"}`}>
        {icon}
      </div>
      <span className="text-sm font-medium truncate">{text}</span>
    </div>
  );
}
