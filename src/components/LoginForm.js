import React,{ useState } from "react";

function LoginForm({ onLogin }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password){
            onLogin();
        }else{
            alert("Please enter both fields");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name:</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                  />
            </div>
            <div>
              <label>Password:</label>
                <input
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
            
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;