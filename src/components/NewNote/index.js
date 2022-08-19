import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, editNote, giveUpToEdit } from '../../redux/slice/noteSlice';
import validationSchema from './validation'
import 'react-toastify/dist/ReactToastify.css';

function NewNote() {
    let singleNote = useSelector(state => state.notes.singleNote)
    const dispatch = useDispatch();
    const handleSubmit = (values, cb) => {
        isAdd === true ? dispatch(addText(values)) : dispatch(editNote({ id: singleNote[0].id, ...values })); handleGiveUp()

    }
    const handleGiveUp = () => {
        dispatch(giveUpToEdit())
        setIsAdd(true)
    }
    const [isAdd, setIsAdd] = useState(true)
    useEffect(() => {
        singleNote.length === 1 ? setIsAdd(false) : setIsAdd(true)
    }, [isAdd, singleNote])

    return (
        <div className="newNote">
            <Formik
                enableReinitialize={true}
                initialValues={isAdd === true ? { note: '', title: '', color: 'cd84f1' } : { note: singleNote[0].note, title: singleNote[0].title, color: singleNote[0].color }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values)
                    resetForm({ values: '' })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form className='addNewForm' onSubmit={handleSubmit}>
                        <div className="formControl">
                            {errors.title && touched.title && errors.title}
                            <label htmlFor="title">Title</label>
                            <input value={values.title} onBlur={handleBlur} onChange={handleChange} type="text" id='title' name='title' />
                        </div>
                        <div className="formControl">
                            {errors.note && touched.note && errors.note}
                            <label htmlFor="note">Note</label>
                            <textarea value={values.note} onBlur={handleBlur} onChange={handleChange} id='note' name="note" placeholder='holder type anything and press enter :)'></textarea>
                        </div>

                        <div className="formControl">
                            <label htmlFor="color">Colors</label>
                            {errors.color && touched.color && errors.color}

                            <div className="radioGroup">
                                <input checked={values.color === 'cd84f1'} value={"cd84f1"} onBlur={handleBlur} onChange={handleChange} type="radio" name='color' id="color_1" className='colorInput' />
                                <input checked={values.color === 'ffcccc'} value={"ffcccc"} onBlur={handleBlur} onChange={handleChange} type="radio" name='color' id="color_2" className='colorInput' />
                                <input checked={values.color === '32ff7e'} value={"32ff7e"} onBlur={handleBlur} onChange={handleChange} type="radio" name='color' id="color_3" className='colorInput' />
                                <input checked={values.color === 'fff200'} value={"fff200"} onBlur={handleBlur} onChange={handleChange} type="radio" name='color' id="color_4" className='colorInput' />

                                <label htmlFor="color_1" id="color_1Button" className="radioButton"></label>
                                <label htmlFor="color_2" id="color_2Button" className="radioButton"></label>
                                <label htmlFor="color_3" id="color_3Button" className="radioButton"></label>
                                <label htmlFor="color_4" id="color_4Button" className="radioButton"></label>
                            </div>
                            <div className="formControl">
                                {isAdd === true && (
                                    <button type='submit' className='addNoteButton'>Add Note</button>
                                )}

                                {isAdd === false && (
                                    <>
                                        <button type='submit' style={{ marginRight: 10 }} className='addNoteButton'>Edit Note</button>
                                        <button type='button' onClick={handleGiveUp} className='addNoteButton'>Give up</button>
                                    </>
                                )}
                            </div>

                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default NewNote