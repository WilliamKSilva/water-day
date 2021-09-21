import React, { useState } from 'react'; 
import "./stylesheet.css";

function RecipientItems() {
    
    const [cups, setCups] = useState(0); 
    const [size, setSize] = useState(14.30); 
    const [sizeTwo, setSizeTwo] = useState(25); 
    const [sizeThree, setSizeThree] = useState(33.33);
    const [id, setId] = useState(0)

    function firstRecipient() {
        const hide = document.getElementById('first-titleId').style.display = 'none'; 
        const show = document.getElementById('CounterId').style.display = 'block';
        const hideRecipients = document.getElementById('recipientContainerId').style.display = 'none'
        const showProgressBar = document.getElementById('progressBarContainerId').style.display = 'block'; 
        const showButton = document.getElementById('buttonCounterId').style.display = 'block';
        var value = 1;
        setCups(7); 
        setId(1);
    }
    
    function secondRecipient() {
        const hide = document.getElementById('first-titleId').style.display = 'none'; 
        const show = document.getElementById('CounterId').style.display = 'block';
        const hideRecipients = document.getElementById('recipientContainerId').style.display = 'none'
        const showProgressBar = document.getElementById('progressBarContainerId').style.display = 'block'; 
        const showButton = document.getElementById('buttonCounterId').style.display = 'block';
        var value = 2
        setCups(4); 
        setId(2);
    } 

    function thirdRecipient() {
        const hide = document.getElementById('first-titleId').style.display = 'none'; 
        const show = document.getElementById('CounterId').style.display = 'block';
        const hideRecipients = document.getElementById('recipientContainerId').style.display = 'none'
        const showProgressBar = document.getElementById('progressBarContainerId').style.display = 'block'; 
        const showButton = document.getElementById('buttonCounterId').style.display = 'block';
        var value = 3
        setCups(3); 
        setId(3);
    } 
    
   function decrementCounter() {
        if (cups > 1) {
            setCups(prevCups => prevCups - 1)
       } else if (cups === 1) {
            const showCongrats = document.getElementById('congratsTextId').style.display = 'block'; 
            const hideCounter = document.getElementById('CounterId').style.display = 'none';
       }  
        if (id == 1) {
            setSize(size + 14.30);
            const progressBarChange = document.getElementById('progressBarId').style.width = size + '%';
        } else if ( id == 2) {
            setSizeTwo(sizeTwo + 25); 
            const progressBarChange = document.getElementById('progressBarId').style.width = sizeTwo + '%';
        } else if (id == 3) {
            setSizeThree(sizeThree + 33.33); 
            const progressBarChange = document.getElementById('progressBarId').style.width = sizeThree + '%';
        }
       
   } 

    return(
        <div>
            <h1 id="first-titleId" className="first-title">
                Escolha um recipiente:
            </h1>
            <div id="recipientContainerId" className="recipientContainer"> 
                <p id="FirstId"> 300 ml </p> 
                <p id="SecondId"> 500 ml </p> 
                <p id="ThirdId"> 700 ml </p>
                <input type="image" src="./300.png" onClick={firstRecipient}/> 
                <input type="image" src="./500.png" onClick={secondRecipient} /> 
                <input type="image" src="./700.png" onClick={thirdRecipient}/>
            </div> 
            <div className="Counter" id="CounterId">
                <p>
                    Você precisa tomar {cups} copo(s) de água
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