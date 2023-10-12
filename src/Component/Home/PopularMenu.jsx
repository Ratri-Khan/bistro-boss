// import React from 'react';

// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu,setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //     // "category": "popular",
    //     const popularItems = data.filter(item => item.category === 'popular');
    //     setMenu(popularItems);
    //     })
    // },[])
    return (
        <div className="w-4/5 m-auto">
            <SectionTitle
             heading="From Our Menu"
             subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
            {
                popular.map(item => <MenuItem
                   key={item._id}
                   item={item}
                ></MenuItem>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;