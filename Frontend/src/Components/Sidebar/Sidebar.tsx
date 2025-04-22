import { TwitterIcon } from "../icons/TwitterIcon";
import { SidebarItem } from "./SidebarItem";
import {YoutubeIcon} from '../icons/YoutubeIcon'
export function Sidebar() {
  return (
    <>
      <div className="h-screen bg-white  border-r w-72 fixed  left-0 top-0 border-2 ">
        <div className="pt-4">
            <SidebarItem text= "Twitter" icon={<TwitterIcon/>} ></SidebarItem>
            <SidebarItem text= "Youtube" icon={<YoutubeIcon/>} ></SidebarItem>
        </div>
      </div>
    </> 
  );
}
