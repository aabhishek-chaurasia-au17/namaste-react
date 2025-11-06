import React, { useEffect } from 'react'

const ResturentMenu = () => {

    useEffect(() => {
      
    }, [third])
    
    
  return (
    <div className='restaurant-menu'>
    {/* <div className="restaurant-summary"></div> */}
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default ResturentMenu