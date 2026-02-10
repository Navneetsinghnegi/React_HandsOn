import React, { useState } from 'react';
import {type  UserProfile } from '../App';


interface UserFormProps{
    onAddUser : (user:UserProfile)=>void;
}


const UserForm: React.FC<UserFormProps> = ({onAddUser}) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<string>("");

    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const newUser : UserProfile = {
        id: Date.now(),
        name,
        email,
        age:Number(age),
    }

    onAddUser(newUser);
    setName("");
    setAge("");
    setEmail("");

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Name' value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            </div>
            <div>
                <input type="email" placeholder='Email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="number" placeholder='Age' value={age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}/>
            </div>
            <button type="submit">Add User</button>
        </form>
    </div>
  )
}

export default UserForm