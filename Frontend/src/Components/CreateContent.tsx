type CreateContentProps = {
  open: boolean;
  onClose: () => void;
};
import { Input } from "../Input/Input";
import { CrossIcon } from "./icons/CrossIcon";
import  {Button }from './Button/Button'
export function CreateContent({ open, onClose }:CreateContentProps) {
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
                <Input placeholder="Title"></Input>
                <br />
                <Input placeholder="Description"></Input>
               
              </div>
          <div className="flex justify-center ">
            <Button variant="primary" text="submit" size="md" className= "hover:bg-purple-500 "></Button>
          </div>
       
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

