import React from 'react'
import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { deleteText, getSingleNote } from '../../redux/slice/noteSlice';
function Card({ item, ...rest }) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteText({ id }))
    }
    return (
        <div {...rest} className='card' style={{ backgroundColor: `#${item.color}` }}>
            <h1>{item.title}</h1>
            <hr />
            <p>
                {item.note}
            </p>
            <div className="noteButtons">
                <i onClick={() => handleDelete(item.id)} style={{ color: '#fff', textAlign: 'right', cursor: 'pointer' }}><MdDelete size={27} /></i>
                <i style={{ color: '#fff', textAlign: 'right', cursor: 'pointer' }} onClick={() => dispatch(getSingleNote({ id: item.id }))}><FiEdit size={24} /></i>
            </div>
        </div>
    )
}

export default Card