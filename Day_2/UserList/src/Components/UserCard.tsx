import React from 'react';
import {type UserProfile } from '../App';

interface UserCardProps{
    user:UserProfile;
    onDeleteUser: (id:number) => void;

}

const UserCard: React.FC<UserCardProps> = ({user,onDeleteUser}) => {
  return (
    <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button onClick={()=>onDeleteUser(user.id)}>Delete</button>
    </div>
  )
}

export default UserCard