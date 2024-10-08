import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Cards = ({home,setInputDiv }) => {
    const data = [
        {
            title: "The BEst Coding Channel",
            desc: " I have to learn coding from this channel",
            status:"In Complete",
        },
        {
            title: "Cpp Concept",
            desc: " I have to learn OOPS concept",
            status:"Complete"
        },
        {
            title: "Projects",
            desc: " I have to do projects",
            status:"In Complete"
        },
        {
            title: "Projects",
            desc: " I have to do projects",
            status:"In Complete"
        },
        {
            title: "Projects",
            desc: " I have to do projects",
            status:"In Complete"
        },



    ];
    const [ImportantButton,setImportantButton] = useState("Incomplete");

    return (
        <div className='grid grid-cols-3 gap-4 p-4'>

            {data && data.map((items, i) => (

                <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
                    <div>
                        <h3 className='text-xl font-semibold'>{items.title}</h3>
                        <p className='text-gray-300 my-2'>{items.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center '>
                        <button className={ `${items.status ==="In Complete"?"bg-red-400":"bg-green-400"}  p-2  rounded w-3/6`}></button>
                        <div className='text-white p-2 w-3/6 text-2xl fonr flex justify-around'><button><FaRegHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>

                    </div>

                </div>

                // </div>

            ))}
           {home==="true" && (<button className='flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300' onClick={()=>setInputDiv("fixed")}>
            <IoMdAddCircle className='text-5xl' />
                <h2 className='text-2xl mt-4'>Add Task</h2>
            </button>)}
        </div >
    )
}

export default Cards
