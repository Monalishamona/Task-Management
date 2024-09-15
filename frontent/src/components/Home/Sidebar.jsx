import React from 'react'
import { Link } from 'react-router-dom';
import { CgNotes } from "react-icons/cg";
import { IoIosCloudDone } from "react-icons/io";
import { MdOutlineLabelImportant } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
const Sidebar = () => {
  const data = [
    {
      title:"All tasks",
      icon: <CgNotes />,
      link:"/",
    },{
      title:"Important tasks",
      icon: <MdOutlineLabelImportant />,
      link:"/importantTasks"
    },{
      title:"Completed tasks",
      icon:<IoIosCloudDone />,
      link:"/completedTasks"
     
    },{
      title:"Incompleted tasks",
      icon:<MdIncompleteCircle />,
      link:"/incompletedTasks"
    },
  ];
  return (
    <>
      <div>
        <h2 className=' text-xl font-semibold'>Monalisha</h2>
        <h4 className='my-1 text-gray-400 '>lisha@gmail.com</h4>
      </div>
      <div>
        {data.map((items,i)=>(
          <Link  to={items.link} key={i} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'>{items.icon} {items.title}</Link>
        ))}
      </div>
      <div>
        <button className='bg-gray-600 w-full p-2 rounded'>Log Out</button>
      </div>
    </>
  )
}

export default Sidebar
