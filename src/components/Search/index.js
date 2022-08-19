import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchFilter } from '../../redux/slice/noteSlice'
function Search() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    useEffect(() => {
        dispatch(searchFilter(search))
    }, [dispatch, search])
    return (
        <form>
            <input type="text" onChange={(e) => setSearch(e.target.value)} className='formInput' placeholder='search any note' />
        </form>
    )
}

export default Search