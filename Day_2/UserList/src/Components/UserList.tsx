import React from 'react';
import type { UserProfile } from '../App';
import UserCard from './UserCard';

interface UserListProps{
    users:UserProfile[];
    onDeleteUser : (id:number) => void;
}

const UserList: React.FC<UserListProps> = ({users,onDeleteUser}) => {
  return (
    <div>
        {users.map(user => (
            <UserCard key={user.id} user={user} onDeleteUser={onDeleteUser}/>

        ))}
    </div>
  )
}

export default UserList