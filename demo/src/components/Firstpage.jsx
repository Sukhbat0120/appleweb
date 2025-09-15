"use client"
import {Button} from  "./button" ;
import { Input } from "./input";
import { AddButton } from "./AddButton";
export function FirstPage() {
  return (
    <div className="flex justify-center p-[60px] ">
      <div className="h-[290px] w-[377px] bg-gray-200 rounded-[6px] shadow-xl p-[24px]">
        <h1 className="text-center font-bold mb-3">To-Do list</h1>
        <div className="flex justify-center gap-[10px]">
         <Input/>
        
        </div>

        <div className="flex justify-center">
         <Button/>
        </div>

        <div className="text-center text-[14px] text-[#6B7280] mt-3">
           
       
          <p>No tasks yet. Add one above</p>
        </div>
        <div className="flex justify-center gap-0.5 p-6">
          <p className="text-sm text-[#6B7280] ">Powered by</p>
          <p className="text-sm text-blue-500 ">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
