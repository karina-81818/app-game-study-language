import { useState } from "react"
import Table from '../../Components/Table/Table';
import './TablePage.scss'

export default function TablePage({ stateWords }) {
    
    const [countTable, setCountTable] = useState(0);
    return (
         <div className="container-tablePage">
         <div className='title-tablePage'>
            <div className='td-tablePage id-tablePage'>#</div>
            <div className="td-tablePage">english</div>
            <div className='td-tablePage'>transcription</div>
            <div className='td-tablePage'>russian</div>
            <div className='td-tablePage'></div>
        </div>
            { stateWords.words.map((item)=>{
                return(
                    <Table key={item.id} {...item}/>
                )
            })}
         </div>
        
    );
}