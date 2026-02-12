import React, { useState } from 'react'
import UserForm from './Components/UserForm';

import UserList from './Components/UserList';

export interface UserProfile{
  id:number;
  name:string;
  age:number;
  email:string;

}


const App : React.FC = () => {
  const [users, setusers] = useState<UserProfile[]>([
    
    { id:1,
      name: "Jane Doe",
      age: 28,
      email:"rahul@gmail.com"
    },
    { 
      id:2,
      name: "John Smith",
      age: 32,
      email:"priya@gmail.com"
      
    },
  ])
  
  const addUser = (user : UserProfile)=>{
    setusers([...users,user]);
  }
   
  const deleteUser = (id:number)=>{
    setusers(users.filter(user => user.id !== id));
  }
  
  
  
  return (
    <div>
      <h1>User Management</h1>
      <UserForm onAddUser={addUser}/>
      <UserList users={users} onDeleteUser={deleteUser}/>
    </div>
  )
}

export default App