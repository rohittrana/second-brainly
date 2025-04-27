// types.ts or icons.ts or whatever file
export const sizebtn = {
               sm: "size-2",
               md: "size-4",
               lg: "size-6"
             };
             
             export interface BtnSize {
               btnSize: "sm" | "md" | "lg";
               onclick?:()=>void;
             }
             