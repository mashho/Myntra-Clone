import './menulist.css';
import React from 'react'

import {useParams} from "react-router-dom";
const MenuList = () => {
    const {menuList} = useParams();
    return (
        <div className="menulist">
            <center>
                <h1>Menu List</h1>
                <h1>{menuList}</h1>
            </center>

            
        </div>
    )
}

export default MenuList
