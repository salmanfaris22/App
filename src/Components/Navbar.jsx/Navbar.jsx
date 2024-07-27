import React from 'react'

const Navbar = ({color,username,handlelogOut}) => {

    
  return (
    <div className='flex justify-between w-[80%] m-auto  h-[80px]  text-3xl font-thin text-center items-center'>

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


</div>
  )
}

export default Navbar
