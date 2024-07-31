
import { useEffect, useState } from 'react'
import Img from '../../assets/9594697.jpg'
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Home/Home';

const LogIn = ({color,setColor}) => {

    const initialValues = { username: "", email: "", password: "", open: false };
    const [formValues, setFormValues] = useState(initialValues);
    const [names, setName] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("done");
            setFormValues({
                ...formValues,
                open: true
            })
            const save = JSON.stringify(formValues)
            localStorage.setItem("id", save)
        }

        let x = localStorage.getItem("id")
        x = JSON.parse(x)

        setName({
            ...x
        })

    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 20) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    const handlelogOut = () => {
        setFormValues({
            ...formValues,
            open: false

        })

        localStorage.clear()
    }

    return (
        <div 
 
        className='flex justify-center items-center h-[100vh] '
        style={{background:color.body}}
        >
            {localStorage.getItem("id") ?


               
                    <Routes>
                        <Route path='/' element={<Home setColor={setColor} color={color} handlelogOut={handlelogOut}   username={names.username}/>} />
                    </Routes>
                   // {/* <div>{names.username}</div>
                   // <button onClick={handlelogOut}>LogOut</button> */}

             

                :
                <div className='h-[80vh] w-[70vw]  bg-white rounded-2xl grid md:grid-cols-2 shadow-black shadow-md place-items-center'>
                    <div className='w-[100%] flex flex-col   h-[100%] items-center  '>
                        <div className=' h-[20%] text-center flex justify-center flex-col items-center font-bold text-2xl'
                         style={{color:color.text}}
                        >
                            Exploring Ideas, Sharing Insights <br/> 
                            <span style={{color:color.sub}}>
                            LogIn My Blog
                            </span>
                           
                        </div>
                        <form onSubmit={handleSubmit} className='w-[100%] flex flex-col items-center justify-center gap-7' >

                            <div className='w-[100%] flex flex-col items-center justify-center h-[80px]'>
                                <input type="text" placeholder='Useername'
                                    onChange={handleChange}
                                    value={formValues.username}
                                    name='username'
                                    className='border p-2 rounded-xl w-[50%] shadow-black  shadow-sm  pl-3 ' />
                                <p className='text-red-600 text-[12px]'>{formErrors.username}</p>

                            </div>

                            <div className='w-[100%] flex flex-col items-center justify-center  h-[80px]'>
                                <input type="email" placeholder='Email'
                                    onChange={handleChange}
                                    value={formValues.email}
                                    name='email'
                                  
                                    className='border p-2 rounded-xl w-[50%] shadow-black  shadow-sm  pl-3 ' />
                                <p className='text-red-600 text-[12px]'>{formErrors.email}</p>

                            </div>

                            <div className='w-[100%] flex flex-col items-center justify-center  h-[80px]'>
                                <input type="password" placeholder='Password'
                                    onChange={handleChange}
                                    value={formValues.password}
                           
                                    name='password'
                                    className='border p-2 rounded-xl w-[50%] shadow-black shadow-sm pl-3 ' />
                                <p className='text-red-600 text-[12px]'>{formErrors.password}</p>

                            </div>
                            <div>
                                <button className='p-2 shadow-black shadow-sm rounded-lg w-36'
                                 style={{background:color.text,color:color.body}}
                                >LogIn</button>
                            </div>
                        </form>
                    </div>
                    <div className=' h-[100%] md:block hidden'>
                        <img src={Img} alt="" className='bg-cover h-[100%]' />
                    </div>
                </div>}
        </div>
    )
}

export default LogIn