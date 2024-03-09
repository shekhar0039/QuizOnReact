import React,{Fragment} from "react";
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";


import answer from "../../assets/img/answer.jpg"
import fifty from "../../assets/img/fiftyfifty.jpg"
import hints from "../../assets/img/hints.jpg"
import options from "../../assets/img/options.jpg"

const QuizInstr=()=>(
    <Fragment>
         <Helmet><title>Quiz instructions - Quiz App</title></Helmet>
         <div className="instructions container">
         <h1>How To Play The Game</h1>
         <p>Ensure you read this guide from start to finish</p>
         <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapes.</li>
                <li>Each game contains of 25 questions.</li>
                <li>Every question contains 4 option.

                <img src={options} alt="Quiz App Options example "/>
                </li>

                <li>
                    Select the option which best answer the question by clicking 
                    <img src={answer} alt="Answer example "  />
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>2 50-50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                </li>
                <li>
                    selecting a 50-50 lifeline by clicking the icon
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    Will remove 2 wrong answer, leaving the correct answer and one 

                    <img src={fifty} alt="Fifty Fifty example"/>
                </li>
                <li>
                    using a hint by clicking the icon  
                    <span className="mdi mdi-lightblub-on mdi-24px lifeline-icon"></span>
                    will remobe one wrong answer and one correct answer,You can use as many hints possible on a single questions
                    <img src={hints} alt="Quiz hint"/>
                </li>
                <li>Free Feel to quite the game at any time </li>
                <li>Timer starts as soon as the game loads</li>
                <li>Lets do it you think you have got what tokes </li>
            </ul>
            <div>
                <span className="left" ><Link to="/">No take me back</Link></span>
                <span className="right" ><Link to="/play/quiz">okk lets do it</Link></span>
            </div>

         </div>
    </Fragment>
    

);
export default QuizInstr;