import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { fiteredNote } from '../../redux/slice/noteSlice'
import { nanoid } from '@reduxjs/toolkit'
function CardList() {

    const filterNote = useSelector(fiteredNote)
    return (
        <div className='cardContent'>
            {filterNote?.map(item => (
                <Card key={nanoid()} item={item} />
            ))}
        </div>
    )
}

export default CardList