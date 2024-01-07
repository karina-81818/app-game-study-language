import { useEffect, useState } from 'react'
import './Slider.scss'

export default function Slider(props) {
  const [pressed, setPressed] = useState(false);
  const [count, setCount] = useState(0);
  
  const handleClickedState = ()=>{
    setPressed(!pressed);
  }

  function editCount(){
    setCount(count + 1)
  }

  useEffect(()=>{
    setPressed(true)
  }, [props])
  
    return (
    <div className="container-slider" {...props}>
      <div className="english-slider">{props.english}</div>
      <div className='transcription-slider'>{props.transcription}</div>
      <div className='btnElem-slider' onClick={handleClickedState}>
      {pressed 
      ?<button onClick={editCount} className='btnCheck-slider'>Показать перевод</button>
      :<p className='russian-slider'>{props.russian}</p>
      }</div>
      <p className='count-slider'>Изучено новых слов: {count}</p>
    </div>
    )
}