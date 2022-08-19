import React from 'react'
import { useDispatch } from 'react-redux'
import { setColorChoose } from '../../redux/slice/noteSlice';
function ListColor() {
    const dispatch = useDispatch();
    const handleColor = (color) => {
        dispatch(setColorChoose(color))
    }
    return (
        <ul className='listColor'>
            <li onClick={() => handleColor('all')} className='active'></li>
            <li onClick={() => handleColor('cd84f1')}></li>
            <li onClick={() => handleColor('ffcccc')}></li>
            <li onClick={() => handleColor('32ff7e')}></li>
            <li onClick={() => handleColor('fff200')} ></li>
        </ul>
    )
}

export default ListColor