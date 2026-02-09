import { type UserProfile } from "../App";
import React from "react";

interface CardProps{
    user:UserProfile;
}


const ProfileCard : React.FC<CardProps> =  ({user}) => {
  return (
    
        
            <div className="h-140 bg-blue-400 rounded-4xl p-5 flex flex-col  items-center shadon-xl">
                <div className="h-50 w-50 rounded-full shrink-0 mt-7 overflow-hidden">
                    <img className= "object-cover h-full w-full ring-8"src={user.image} alt="profile_image" />
                </div>
                <div className=" text-black w-70 mt-12 flex flex-col gap-4 px-8">
                    <div className="justify-items-start p-5 font-bold border-b-2">
                       <div className="flex justify-between">
                            <span className="font-bold text-gray-700 tracking-wide">Name:</span>
                            <span className="text-gray-600 tracking-wide">{user.name}</span>
                        </div>
                        <div className="flex justify-between  pt-2">
                            <span className="font-bold text-gray-700 tracking-wide">Age:</span>
                            <span className="text-gray-600 tracking-wide" >{user.age}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span className="font-bold text-gray-700 tracking-wide">Blood Group:</span>
                            <span className="text-gray-600 tracking-wide ">{user.bloodGroup}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-auto w-full px-5 mb-6"> 
                    <div className="bg-blue-500 text-white py-3 rounded-2xl shadow-md text-center">
                        <p className="text-lg font-bold tracking-wide uppercase">{user.designation}</p>
                    </div>
                </div>
            </div>
             
        
    
    
  )
}

export default ProfileCard