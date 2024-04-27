import React, { useState } from 'react';
import './sign_up.css'
import { useNavigate } from 'react-router-dom';
import { PatternFormat } from 'react-number-format';
import { API_URL } from '../../config';

const SignUp = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        // API Call

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
                role: role,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("role", role);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div>
            <form className="SignUpForm" method='POST' onSubmit={register}>
                <div className="Heading">
                    <div>
                        <p className="SU_header">Sign Up</p>
                        <p className="SU_headersubtext">Already a member? <a href="Login" ><span>Login</span></a></p>
                    </div>
                </div>
                <div className="SUF_content">
                    <div className="SUF_TextInputs">  
                    <div className="RoleDiv">
                    <p>Role <span title='This is a required field.'>*</span></p>
                    <select 
                    title="Select Role" 
                    name="role" 
                    id="role" 
                    onChange={(e) => setRole(e.target.value)}
                    required>
                        <option value="Select Role" disabled selected hidden>Select Role</option>
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    </div>  
                    <div className="NameDiv">
                        <p>Name <span title='This is a required field.'>*</span></p>
                        <input 
                        name='Name'
                        id='Name'
                        title="Enter Your Name" 
                        type="text" 
                        placeholder="Enter your Full Name"
                        onChange={(e) => setName(e.target.value)}
                        required />
                    </div>
                    <div className="PhoneNumberDiv">
                        <p>Phone number <span title='This is a required field.'>*</span></p>
                        <PatternFormat
                            id='phone'
                            name='phone' 
                            type="tel"
                            format="+1 (###) ###-####" 
                            mask="_" 
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Enter Your Phone Number (XXX)-XXX-XXXX'
                            required
                        />
                    </div>
                    <div className="EmailDiv">
                        <p>Email <span title='This is a required field.'>*</span></p>
                        <input 
                        name='Email'
                        id='Email'
                        title="Enter your Email Address" 
                        type="email" 
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>
                    <div className="PasswordDiv">
                        <p>Password <span title='This is a required field.'>*</span></p>
                        <input 
                        name='Password'
                        id='Password'
                        title="Enter your Password" 
                        type="password" 
                        placeholder="Enter your password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                        <p><small className="PasswordSubText">* Must be more than 8 characters</small></p>
                    </div>
                    </div>
                    <div className="SUF_Buttons">
                        <button className="SignUpButton" type="submit" value="Sign Up">Sign Up</button> <br></br>
                        <button className="ResetButton" type="reset" value="Reset">Reset</button>
                    </div>
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                </div>
            
            </form>
    </div>

    );
}

export default SignUp;