import { Input } from "../Input/Input";
import {Button} from '../Components/Button/Button'
export function Signup(){
               return(
                              <>
                              <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                                       <div className="bg-white rounded min-w-48  p-8 ">
                                             <Input placeholder="Username"></Input>
                                              <br />
                                             <Input placeholder="Password"></Input>
                                             <div className="flex  justify-center">
                                             <Button variant="primary" size="md" text="Signup" className="hover:bg-purple-300 w-full flex justify-center cursor-pointer" ></Button>
                                             </div>
                                             
                                       </div>
                              </div>
                              </>
               )
}