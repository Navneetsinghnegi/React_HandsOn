import React, { useState } from 'react'

const LikeButton = () => {
    const [liked, setLiked] = useState<boolean>(false);

   const toggleLike = () => {
    setLiked(prevLiked => !prevLiked);
  };

   
  return (
    <div className=' h-50 w-50 flex justify-center items-center content-center bg-blue-500'>
        <div className=' w-20 h-10 flex items-center justify-center ' >
            <button onClick={toggleLike} className={`"text-amber-50 bg-gray-400 w-full rounded-md cursor-pointer" ${liked ? 'bg-red-600 ' : 'bg-gray-400'}`}>{liked ? '❤️ Liked' : '🤍 Like'}</button>
        </div>
    </div>
    
  )
}

export default LikeButton