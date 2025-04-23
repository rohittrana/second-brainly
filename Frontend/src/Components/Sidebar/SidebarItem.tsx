import { ReactElement } from "react";
export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 items-center  hover:bg-slate-300 cursor-pointer rounded max-w-48 pl-4 transition-all  ">
      <div className="pr-2 ">{icon}</div> 
      <div>{text}</div>
    </div>
  );
}
