import React from 'react'
 
interface Tprops{
  name : string,
  rollno : string,
  day : string,
  distancelearning: string,
  center: string

}
 const card = (props:Tprops) => {
   return (
    <div> 
        <h1 className='text-black ml-10 w-56 font-bold shadow-md '>Student Identification Card</h1>
     <div className="bg-white w-60 mx-8 text-black border-y-8 font-sans shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-gray-800">Name: {props.name}</h1>
        <h1 className="text-gray-800">Roll No: {props.rollno}</h1>
        <h1 className='text-gray-800'>Center: Governor House Karachi</h1>
        <h1 className='text-gray-800'>Distance Learning: No</h1>
        <h1 className='text-gray-800'>Day: Monday</h1>
     </div>
     </div>
   )
 }
 export default card


































 