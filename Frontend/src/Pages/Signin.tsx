import { Input } from "../Input/Input";
import {Button} from '../Components/Button/Button'
import axios from 'axios';
import {BACKEND_URL} from '../config';
import {useRef} from 'react';
import { useNavigate } from "react-router-dom";

export function Signin(){
               const usernameRef = useRef<HTMLInputElement>(null);
               const passwordRef = useRef<HTMLInputElement>(null);
               const navigate = useNavigate();

                     async function signin(){
                              const username = usernameRef.current?.value;
                              const password = passwordRef.current?.value;
                     const response =  await axios.post(BACKEND_URL+"api/v1/signin",{
                                           
                                                username,
                                                password
                                               
                                           
                              })
                          const jwt = response.data.token;
                          localStorage.setItem("token",jwt);
                          navigate("/dashboard");
                        //redirect to user to dashboard 
               }
               return(
                              <>
                              <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
                                       <div className="bg-white rounded min-w-48  p-8 ">
                                             <Input ref={usernameRef} placeholder="Username"></Input>
                                              <br />
                                             <Input ref={passwordRef} placeholder="Password"></Input>
                                             <div className="flex  justify-center">
                                             <Button onClick={signin} variant="primary" size="md" text="Signin" className="hover:bg-purple-300 w-full flex justify-center cursor-pointer" loading={true}></Button>
                                             </div>
                                             
                                       </div>
                              </div>
                              </>
               )
}