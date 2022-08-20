import React, { useState } from 'react'
// import Task from './Task'

const Homepage = () => {
  const [set, setData] =useState([])
  const [items, setItems] =useState("")
  const sk = (value)=>{
// tasks.push(value)
//   console.log({tasks})
setData([...set,items])
  }
  const fun =(e )=>{
    // console.log({e});
    const newList = set.filter((Value) => Value != e);
    // console.log(newList);
    setData(newList);
  }

  const fun1=(e)=>{
    const newList = set.filter((Value) => Value.e != e);
    // console.log(newList);
    setData(newList);
  }
  return (
   <>

    <p className='text-2xl pt-4'>Add your list here</p>
    <div>
    <input type="text" value={items} placeholder='Add items'
    className='pl-2 text-2xl mt-4 drop-shadow-2xl ... w-[500px]  rounded-md h-[40px] '
     onChange={(e)=>setItems(e.target.value)}/>
   <button onClick={sk} className='bg-slate-400  pt-1 h-[39px] ' >➕ </button>
   </div>
  
   {set?.map((Value)=>{
    return(
      <>
    {/* //  <Task tasks={Value}/> */}
    <div className='show items pt-6 '>
    
    
  
   </div>
   <div>
   <span className=" rounded-sm bg-gray-200 font-semibold drop-shadow-2xl ...  pl-2 text-2xl">{Value}
  <button  onClick={() => fun(Value)}className='bg-slate-400'>➖</button>
   
   </span> 
   </div>
   </>
    )
   })}
   {<button  onClick={(Value) => fun1(Value.e)}className='bg-slate-400 pl-2 pr-2 rounded-lg font-semibold mt-6 h-[30px]'>Remove all</button>}
   
   </>
   
  )
}





export default Homepage
