import React from "react";
import './sidebarRow.css'

function SidebarRow({Icon, title}){
    return <div className="sidebarRow">
        <Icon className='sidebarRow__icon'/>
        <h3 className='sidebarRow__iconName'>{title}</h3>

    </div>
}

export default SidebarRow;