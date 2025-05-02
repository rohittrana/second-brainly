type CreateContentProps = {
  open: boolean;
  onClose: () => void;
};
import { Input } from "../Input/Input";
import { CrossIcon } from "./icons/CrossIcon";
import {useRef, useState} from 'react';
import  {Button }from './Button/Button'
import { BACKEND_URL } from "../config";
import axios  from 'axios';

enum contentType{
    Youtube="youtube",
     Twitter ="twitter"
}
export function CreateContent({ open, onClose }:CreateContentProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type ,setType] =useState(contentType.Youtube);

  async  function addContent(){
    const  title = titleRef.current?.value;     
    const  link = linkRef.current?.value;     
         axios.post(BACKEND_URL+ ('api/v1/content'),{
          title,
          link,
          type,
          

        },{
          headers:{
            "Authorization":localStorage.getItem('token')
          }
       
        })
        onClose();
    
      
  }
  return (
    <div >
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0   bg-opacity-60 flex justify-center">
          <div className="flex flex-col justify-center ">
            <span className="bg-white opacity-100 p-4 rounded">
              
              <div className="flex justify-end cursor-pointer">
                <div onClick={onClose}><CrossIcon></CrossIcon></div>
                
              </div>
              <div className="">
                <Input ref={titleRef} placeholder="Title"></Input>
                <br />
                <Input ref={linkRef} placeholder="Description"></Input>
               
              </div>
              <h1 className="flex  justify-center">Type</h1>
              <div className="flex justify-around p-3">
                <Button text="Youtube" variant={type === contentType.Youtube?'primary':'secondary'} size="md" onClick={()=>{
                  setType(contentType.Youtube);
                }}></Button>
                <Button text="Twitter" variant={type === contentType.Twitter?'secondary':'primary'} size="md"  onClick={()=>{
                  setType(contentType.Twitter);
                }}></Button>
              </div>
          <div className="flex justify-center ">
            <Button onClick={addContent} variant="primary" text="submit" size="md" className= "hover:bg-purple-500 "></Button>
          </div>
       
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

