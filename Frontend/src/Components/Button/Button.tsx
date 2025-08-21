import{ReactElement} from  'react';

interface ButtonProps{
       variant:"primary"|"secondary";
       size:"sm"|"md"|"lg";
       text:string;
       startIcon?:ReactElement;
       onClick?: () => void;
       className?:string;
       loading?:boolean;
       navigation?: string; 
       

}
const variantStyles={
       "primary":"bg-purple-600 text-white",
       "secondary":"bg-purple-200 text-purple-600"
       
}
const sizeStyle={
       "sm":"rounded-sm py-1 px-2 font-light",
       "md":"rounded-md py-2 px-4 font-light",
       "lg":"rounded-lg py-3 px-5 font-ligth",
}

export const Button=(props:ButtonProps)=>{
       const handleClick = () => {
             
              if (props.onClick) {
                props.onClick();
              }
             
              if (props.navigation) {
                window.location.href = props.navigation;
              }
       }
       return(
              <>
                <button onClick={handleClick}  className={`  ${variantStyles[props.variant]}  ${sizeStyle[props.size]} ${props.className} ${props.loading?"disabled":""}flex item-center`}> {props.startIcon ?<div className='pr-3 mt-1'>{props.startIcon}</div>:null} {props.text} {props.navigation} </button>
              </>
       )
}