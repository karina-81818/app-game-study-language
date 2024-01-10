import { useEffect, useState, useRef } from 'react'
import styles from './Slider.module.scss'

export default function Slider(props) {
  const [pressed, setPressed] = useState(true);
  const [count, setCount] = useState(0);
  const btnElem = useRef(false);
  
  const handleClickedState = ()=>{
    setPressed(!pressed);
  }

  function editCount(){
    setCount(count + 1)
  }

  useEffect(()=>{
    setPressed(true);
    btnElem?.current?.focus()
  }, [props])
  
    return (
    <div className={styles.container} {...props}>
      <div className={styles.english}>{props.english}</div>
      <div className={styles.transcription}>{props.transcription}</div>
      <div className={styles.btnElem} onClick={handleClickedState}>
       {pressed 
      ?<button ref={btnElem} onClick={editCount} className={styles.btnCheck}>Показать перевод</button>
      :<p className={styles.russian}>{props.russian}</p>
      }</div>
      <p className={styles.count}>Изучено новых слов: {count}</p>
    </div>
    )
}