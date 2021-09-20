import React, { useState } from 'react'; 
import "./stylesheet.css";

function RecipientItems() {
    
    const [cups, setCups] = useState(0); 
    const [tamanho, setTamanho] = useState(5.71);


    function firstRecipient() {
        const hide = document.getElementById('first-titleId').style.display = 'none'; 
        const show = document.getElementById('CounterId').style.display = 'block';
        const hideRecipients = document.getElementById('recipientContainerId').style.display = 'none'
        const showProgressBar = document.getElementById('progressBarContainerId').style.display = 'block'; 
        const showButton = document.getElementById('buttonCounterId').style.display = 'block';
        setCups(7); 
    }
    
    function secondRecipient() {
        const hide = document.getElementById('first-titleId').style.display = 'none'; 
        const show = document.getElementById('CounterId').style.display = 'block';
        const hideRecipients = document.getElementById('recipientContainerId').style.display = 'none'
        const showProgressBar = document.getElementById('progressBarContainerId').style.display = 'block'; 
        const showButton = document.getElementById('buttonCounterId').style.display = 'block';
        setCups(4);
    } 

    function thirdRecipient() {
        const hide = document.getElementById('first-titleId').style.display = 'none'; 
        const show = document.getElementById('CounterId').style.display = 'block';
        const hideRecipients = document.getElementById('recipientContainerId').style.display = 'none'
        const showProgressBar = document.getElementById('progressBarContainerId').style.display = 'block'; 
        const showButton = document.getElementById('buttonCounterId').style.display = 'block';
        setCups(3);
    } 
    
   function decrementCounter() {
        if (cups > 1) {
            setCups(prevCups => prevCups - 1)
       } else if (cups === 1) {
            const showCongrats = document.getElementById('congratsTextId').style.display = 'block'; 
            const hideCounter = document.getElementById('CounterId').style.display = 'none';
       }  
        setTamanho();
        const progressBarChange = document.getElementById('progressBarId').style.width = tamanho + '%';
       
   } 

    return(
        <div>
            <h1 id="first-titleId" className="first-title">
                Escolha um recipiente:
            </h1>
            <div id="recipientContainerId" className="recipientContainer"> 
                <input type="image" src="./300.png" onClick={firstRecipient}/> 
                <input type="image" src="./500.png" onClick={secondRecipient} /> 
                <input type="image" src="./700.png" onClick={thirdRecipient}/>
            </div> 
            <div className="Counter" id="CounterId">
                <p>
                    Você precisa tomar {cups} copos de água
                </p>
                <button id="buttonCounterId" className="buttonCounter" onClick={decrementCounter}>
                    Tomou +1
                </button>
            </div>
            <p id="congratsTextId" className="congratsText">
                Parabéns! Você atingiou sua meta diária.
            </p>
            <div id="progressBarContainerId" className="progressBarContainer">
                <div id="progressBarId" className="progressBar">
                </div>
            </div>
        </div>
    )
} 


export default RecipientItems;