import { TwitterIcon } from "../icons/TwitterIcon";
import { SidebarItem } from "./SidebarItem";
import {YoutubeIcon} from '../icons/YoutubeIcon'
import { BrainIcon } from "../icons/BrainIcon";

export function Sidebar() {
    
  return (
    <>
      <div className="h-screen bg-white  border-r w-72 fixed  left-0 top-0    pl-6">
        <div className=" fixed  text-2xl pt-4  flex items-center gap-3">
          <div className="text-purple-600">
          <BrainIcon ></BrainIcon> 
          </div>
          <div> Second Brain</div>
        
        </div>
        <div className="pt-16 gap-6 ">
            <SidebarItem text= "Twitter" icon={<TwitterIcon/>}></SidebarItem>
            <SidebarItem text= "Youtube" icon={<YoutubeIcon/>} ></SidebarItem>
        </div>
      </div>
    </> 
  );
}
