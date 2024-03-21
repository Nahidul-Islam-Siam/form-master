import { useState } from "react";


const StateFullForm = () => {
    const [name,setName] = useState(null)
const [email,setEmail] = useState(null)
const[password, setPassword] = useState(null)
const [error, setError] = useState('')
    const handleSubmit = (e)=>{
e.preventDefault()
if (password.length < 6) {
    setError('password must be 6 characters or longer')
}else{
    setError('')
}
console.log(email,password,name);
    }
    const handleNameChange =(e)=>{
       
        setName(e.target.value)
            }

    const handleEmailChange =(e)=>{

setEmail(e.target.value)
    }

    const handlePasswordChange =(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)
            }
    return (
        <div>
               <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                 type="text" name="name"/>
                <br />
                <input
                onChange={handleEmailChange}
                 type="email" name="email" id="" />
                <br />
                <input
                onClick={handlePasswordChange}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;