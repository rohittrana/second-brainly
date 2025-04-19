import { ReactElement } from "react";

interface ButtonStyle{

       variants:"primary"|"secondary";
       size:"sm"|"md"|"lg";
       text:string;
       startIcon?:ReactElement;
       endIcon?:ReactElement;
       onclick?:()=>void;
}
const sizeStyle={
               "lg": "px-8 py-4 text-xl rounded-xl",
               "md": "px-4 py-2 text-md rounded-md",
               "sm": "px-2 py-1 text-sm rounded-sm",
}
const Designbtn={
               "primary":"bg-purple-300 text-purple-600",
               "secondary":"bg-purple-600 text-white"
}
export const Button=(props:ButtonStyle)=>{
               return(
                              <>
                              <button className= {`${Designbtn[props.variants]} ${sizeStyle[props.size]}  flex item-center `}>{props.startIcon && <div className="m-1 pr-2">{props.startIcon}</div>}{props.text} {props.endIcon && <div
                              className="m-1 pr-2">{props.endIcon}</div>}</button>
                              </>
               )
}