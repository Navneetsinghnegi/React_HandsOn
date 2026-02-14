import React, { useState } from 'react'

const LoginToggle = () => {
    const [login, setLogin] = useState<boolean>(true)

    const isLogin = ()=>{
        setLogin(prev => !prev);

        
    }
  return (
    <div>
        {login  ? (<div>
            <h2>welcome</h2>
            <button onClick={()=> isLogin()}>logout</button>
        </div>) : 
        (<div>
            <h2>Please Login</h2>
            <button onClick={() => isLogin()}>login</button>
        </div>)
        }
    </div>
  )
}

export default LoginToggle;