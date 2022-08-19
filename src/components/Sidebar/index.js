import React from 'react'
import Search from '../Search';
import NewNote from '../NewNote';
import ListColor from '../ListColor';

function SideBar() {
    return (
        <>
            <div className="menuContent">
                <Search />
                <NewNote />
                <ListColor />
            </div>

        </>
    )
}

export default SideBar