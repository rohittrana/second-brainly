import{useRef} from 'react';
import { Input } from "../Input/Input";
import {Button} from '../Components/Button/Button'
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Signup(){
               const usernameRef = useRef<HTMLInputElement>(null);
               const passwordRef = useRef<HTMLInputElement>(null);
               const navigate = useNavigate();
              async function signup(){
                              const username = usernameRef.current?.value;
                              const password = passwordRef.current?.value;
                              await axios.post(BACKEND_URL +"api/v1/signup",{
                                            
                                                            username,
                                                            password
                                            
                              })
                               alert("you have signup !")
                             navigate('/signin');
               }
               return(
                              <>
                              <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                                       <div className="bg-white rounded min-w-48  p-8 ">
                                             <Input placeholder="Username" ref = {usernameRef}></Input>
                                              <br />
                                             <Input placeholder="Password" ref={passwordRef}></Input>
                                             <div className="flex  justify-center">
                                             <Button onClick={signup} variant="primary" size="md" text="Signup" className="hover:bg-purple-300 w-full flex justify-center cursor-pointer" loading={true}></Button>
                                             </div>
                                             
                                       </div>
                              </div>
                              </>
               )
}