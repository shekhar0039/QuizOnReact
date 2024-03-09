import React, { Component, Fragment,state } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import {stats} from "stats"

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
  }
  componentDidMount() {
    const { state } = this.state;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        fiftyFiftyUsed: state.fiftyFiftyUsed,
      });
    }
  }
  render() {
    const { state } = this.state;
    let stats,remark;
    const userScore=this.state.score
    if(userScore<=30){
        remark="you more practice";
    }
    else if(userScore>30 && userScore<=50){
        remark="better luck next time";
    }else if(userScore<=70 && userScore>50){
        remark="you can do better";
    }else if(userScore>=71 && userScore<=84){
        remark="you did great";
    }else{
        remark="you are genius"
    }


    if (state !== undefined) {
      stats = (
        <Fragment>
        <div style={{textAlign:"center"}}>
            <span className="mdi mdi-check-circle-outline success-icon"></span>
        </div>
        <h1>Quiz ended</h1>
        <div className="container">
            <h4>{remark}</h4>
            <h2>your score:{this.state.score.toFixed(0)}&#37</h2>
            <span className="stat left">totel number of question:</span>
            <span className="right">{this.state.numberOfQuestions}</span> <br></br>

            <span className="stat left">number of attempt question:</span>
            <span className="right">{this.state.numberOfAnsweredQuestions}</span><br></br>

            <span className="stat left">number of correct answer:</span>
            <span className="right">{this.state.correctAnswers}</span><br></br>

            <span className="stat left">number of wrong answer:</span>
            <span className="right">{this.state.wrongAnswers}</span> <br></br>

            <span className="stat left">Hints used:</span>
            <span className="right">{this.state.hintsUsed}</span><br></br>

            <span className="stat left">50-50 used:</span>
            <span className="right">{this.state.fiftyFiftyUsed}</span>

           
        </div>
        <section>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>

                <li>
                    <Link to="//play/quiz">Play Again</Link>
                </li>
            </ul>
        </section>
        </Fragment>
      );
    } else {
      stats = (
        <section>
        <h1 className="no-stats">No available</h1>
        <ul>
        <li>
            <Link to="/">Back</Link>
        </li>

        <li>
            <Link to="//play/quiz">Take a quiz</Link>
        </li>
    </ul>
    </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Summary</title></Helmet>
        {stats}
      </Fragment>
    );
  }
}
export default QuizSummary;
