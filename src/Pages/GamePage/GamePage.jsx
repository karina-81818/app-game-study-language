import { useState, useEffect } from "react";
import Slider from "../../Components/Slider/Slider";
import './GamePage.scss'

export default function GamePage({ stateWords }) {
    let [countSlider, setCountSlider] = useState(0);
    const [click, setClick] = useState(true);
    
    function prevSlider() {
        setCountSlider (prevSlider => prevSlider - 1)  
        if(countSlider < 0){
            setCountSlider(stateWords.words.length-1)
        }
        setClick(click)
    }
   
    function nextSlider() {
        setCountSlider (prevSlider => prevSlider + 1)
         if(countSlider === stateWords.words.length-1){
            setCountSlider(0)
        }
    }
    
    return (
        <div className="slider-game">
            <button className="btnPrevGame" onClick={prevSlider}><span className="material-symbols-outlined">
arrow_back_ios</span></button>
            <Slider {...stateWords.words[countSlider]} />
            <button className="btnNextGame" onClick={nextSlider}><span className="material-symbols-outlined">
arrow_forward_ios</span></button>
        </div>
    );
}