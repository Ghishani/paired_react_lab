import React, { useState } from "react";

const SignUp = ({ users, setUsers, setCurrentUser }) => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validate =() => {
        //check if fields are blank
        if(name === "" || email === "" || password === ""){
          setError("Please complete all fields.")
          return false;
        }


        //check for unique email
        if(users.find((user) => user.email === email)){
          setError("That email address is already in use.")
          return false;
        }


        //check that passwords match
        if(password !== confirmPassword) {
          setError('Passwords do not match, please try again.')
          return false;
        }
        return true;
    
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
    
        const newUser = { name, email, password };
        // adds new users to the array of users 
        setUsers([newUser, ...users]);
        setCurrentUser(newUser);
    
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
      };

    return (
        <>
        <h2>Sign Up</h2>
        <form  onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='text' name='email-address' placeholder='Enter Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' name='password' placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type='password' name='confirmPassword' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

            <button className="sign-up-button">Sign Up!</button>
        </form>
        <p>{error}</p>

        
        
        </>
    )
};

export default SignUp;