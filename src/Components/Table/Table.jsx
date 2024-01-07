import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Table.scss'

function Table(props) {
    const [edited, setEdit] = useState(false);
    const btnElem = useRef(false);
    const handleEditState = ()=>{
        setEdit(true)
    }
    const handleCancelState = ()=>{
        setEdit(false)
    }
    useEffect(()=>{
        btnElem.current.focus()
      }, [])
    
    return ( 
        <div className='container-table'{...props}>
            <div className='td-table id-table'>{props.id}</div>
            <div className='td-table'>{edited
            ?<input type="text" />:props.english}</div>
            <div className='td-table'>{edited
            ?<input type="text" />:props.transcription}</div>
            <div className='td-table'>{edited
            ?<input type="text" />:props.russian}</div>
            <div className='td-table btnContainer-table btn-title'>
            <button ref={btnElem} className="edit-table" onClick={handleEditState}><span className="material-symbols-outlined">edit</span></button>
            <button className="cancel-table" onClick={handleCancelState}><span className="material-symbols-outlined">cancel</span></button>
            <button className="save-table"><span className="material-symbols-outlined">save_as</span></button>
            <button className="del-table"><span className="material-symbols-outlined">delete</span></button>
            </div>  
        </div>
            );
}
export default Table;

