import React, {useState} from 'react';
import './index.css';



export const SideBar = () => {
    const [activeMenu, setActiveMenu] = useState();

    const sidebarMenu = ['JavaScript', 'Html', 'Css', 'Webpack'];
    console.log(activeMenu)
    return (
        <div className='sidebar'>
            <p className='sidebarName'>Выбор</p>
            <p className='sidebarNameTwo'>Языки программирования</p>
            <ul className='sidebarList'>
                {sidebarMenu.map((item, index) => (
                    <li 
                        className={activeMenu === index ? 'sidebarActiveElement' : ''} 
                        onClick = {() => setActiveMenu(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}