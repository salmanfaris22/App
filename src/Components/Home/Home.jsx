import axios from 'axios'
import React, { createContext, useEffect, useState ,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageBg from '../../assets/Home-img.png'
import BlogList from './BlogList'
import Navbar from '../Navbar.jsx/Navbar'


export const ColorsContext = createContext() 

const Home = ({setColor,color, handlelogOut, username }) => {


    const [blogs, setBlogs] = useState([])
  
    

    const navigater = useNavigate()
    useEffect(() => {
        axios("http://localhost:3000/blog")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log("erroed"))

    }, [navigater])

    const handleDelet = (id) => {
        axios.delete("http://localhost:3000/blog/" + id)
            .then((e) => {
                navigater('/')

            })

    }
    return (
        <div className='h-[100vh] w-[100vw] font-thin' style={{ background: color.body }}>
            <Navbar setColor={setColor} color={color} username={username} handlelogOut={handlelogOut}/>
            {/* <div className='flex justify-between w-[80%] m-auto  h-[80px]  text-3xl font-thin text-center items-center'>

                <div
                    style={{ color: color.text }}
                    className=''>
                    Welcome  <span
                        style={{ color: color.sub }}
                        className=' font-bold'>{username} </span>

                </div>
                <div className='flex gap-2'>
                    <button onClick={handlelogOut}
                        style={{ color: color.body, background: color.text }}
                        className=' p-3 '>LogOut</button>

                    <button
                        style={{ color: color.body, background: color.sub }}
                        className=' p-3 '>ChangeThem</button>
                </div>


            </div> */}


            <div className=' text-center h-[70%]   grid md:grid-cols-2 place-items-center'>
                <div className='h-[100%] flex justify-center items-center'>
                    <img src={ImageBg} alt="" className='h-[70%]' />
                </div>
                <div className='h-[100%] flex flex-col justify-center items-center gap-4'>
                    <div className='flex font-bold text-6xl ' 
                    style={{color:color.text}}>
                        Exploring Ideas, Sharing Knowledge 
                    </div>
                    <div className='font-mono text-3xl'
                    style={{color:color.sub}}
                    >
    Insights and stories from our team 
                    </div>
                    <Link to="/addblog" className='p-3'
                    style={{background:color.text, color:color.body}}
                    >
                        Creat Bloge
                    </Link>
                </div>

            </div>
    <ColorsContext.Provider value={color}>
    <BlogList blogs={blogs} handleDelet={handleDelet} navigater={navigater} color={color}/>
    </ColorsContext.Provider>
            
            {/* <div>
                {blogs.map((e, i) => {
                    return (
                        <div key={i} className='flex flex-col mt-8'>
                            <div>
                                <div className='font-bold'>
                                    {e.titile}
                                </div>
                                <div className='text-blue-500'>
                                    {e.body}
                                </div>
                                <div>

                                    <img src={e.img} alt="" />

                                </div>
                            </div>




                            <div className=''>


                                <button className='ml-8 bg-blue-300' onClick={() => {
                                    handleDelet(e.id)
                                    navigater('/update')
                                }}>delet</button>
                                <Link to={`/update/${e.id}`}>
                                    <button className='bg-red-400'>updat</button>
                                </Link>
                            </div>

                        </div>
                    )
                })}
            </div> */}



        </div>
    )
}

export default Home
