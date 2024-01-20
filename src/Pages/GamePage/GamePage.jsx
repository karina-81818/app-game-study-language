import { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import styles from './GamePage.module.scss'

export default function GamePage({ words, setWords }) {
    let [countSlider, setCountSlider] = useState(0);
    const [click, setClick] = useState(true);
    
    function prevSlider() {
        setCountSlider (prevSlider => prevSlider - 1)  
        if(countSlider < 0){
            setCountSlider(words.length-1)
        }
        setClick(click)
    }
   
    function nextSlider() {
        setCountSlider (prevSlider => prevSlider + 1)
         if(countSlider === words.length-1){
            setCountSlider(0)
        }
    }
    
    return (
        <div className={styles.slider}>
            <button className={styles.btnPrevGame} onClick={prevSlider}><span className="material-symbols-outlined">
arrow_back_ios</span></button>
            <Slider {...words[countSlider]} />
            <button className={styles.btnNextGame} onClick={nextSlider}><span className="material-symbols-outlined">
arrow_forward_ios</span></button>
        </div>
    );
}