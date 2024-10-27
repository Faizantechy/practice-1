import React from 'react'
import { useState } from 'react';

const List2 = () => {

    const countries = [
        "United States",
        "Canada",
        "Germany",
        "Australia",
        "Japan",
        "Brazil",
        "India",
        "United Kingdom",
        "France",
        "South Africa"
    ];
    
    const [selectedIndex, setSelectedIndex] = useState(0)
      
      
  return (
      <div>
          
          <ul>
              
              <h2>List of the Countries</h2>
              
              {countries.map((item, index) => {
                  
                  return <li className={selectedIndex === index ? 'LI' : null} onClick={() => {
                      
                    setSelectedIndex(index)
                  }}>{item}</li>

              })}
              

            
          </ul>
          


    </div>
  )
}

export default List2