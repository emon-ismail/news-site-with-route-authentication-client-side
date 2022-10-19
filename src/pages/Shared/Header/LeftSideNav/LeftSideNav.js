import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories,setCatagories]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/news-catagories")
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    },[])
    return (
        <div>
          <h2>All Catagory:{catagories.length}</h2>  
          <div>
            {
                catagories.map(catagory=><p key={catagory.id}>
                    <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
          </div>
        </div>
    );
};

export default LeftSideNav;