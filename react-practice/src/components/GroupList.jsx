import React, { useState } from 'react'

const GroupList = () => {


   let names=[

    'New York',
    'California',
    'Australia',
    'Germany',
    'Switzerland'
  ];







  // const message = names.length === 0 ? <p>No Items Found</p> : null;

  const message=()=>{
   return names.length === 0 ? <p>No Items Found</p> : null

  }
  



  const [selectedIndex, setSelectedIndex]= useState(-1)



  return (
    <div className='container'>

      <h2 className=''>Group List</h2>

      {message()}


<ul class="list-group">

        {names.map((item, index) => {
          

          return <li className={selectedIndex === index ? "LI" : null} onClick={() => {setSelectedIndex (index)}}>{item}</li>

        })}

  
</ul>


    </div>
  )
}

export default GroupList