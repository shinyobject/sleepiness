import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Scale from "./Components/Scale";
import Buttons from "./Components/Buttons";
import "./styles.css";

const AppRaw = ({ className }) => {
  const [questions, setQuestions] = useState([
    {
      question: "Sitting and reading.",
      answer: 0
    },
    {
      question: "Watching TV.",
      answer: 0
    },
    {
      question:
        "Sitting inactively in a public place (e.g., a theater or a meeting).",
      answer: 0
    },
    {
      question: "As a passenger in a car for an hour without a break.",
      answer: 0
    },
    {
      question:
        "Lying down to rest in the afternoon when circumstances permit.",
      answer: 0
    },
    {
      question: "Sitting and talking to someone",
      answer: 0
    },
    {
      question: "Sitting quietly after a lunch without alcohol",
      answer: 0
    },
    {
      question: "In a car, while stopped for a few minutes due to traffic.",
      answer: 0
    }
  ]);
  const results = [
    {
      min: 0,
      max: 5,
      range: "0 - 5",
      label: "below average"
    },
    {
      range: "6 - 10",
      min: 6,
      max: 10,
      label: "higher than average"
    },
    {
      range: "11 - 12",
      min: 11,
      max: 12,
      label: "mildly excessive"
    },
    {
      range: "13 - 15",
      min: 13,
      max: 15,
      label: "moderately excessive"
    },
    {
      range: "16 - 24",
      min: 16,
      max: 24,
      label: "severely, excessively sleepy"
    }
  ];
  const [total, setTotal] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const saveAnswer = (index, value) => {
    console.log(index, value * 1, questions[index]);
    questions.splice(index, 1, {
      question: questions[index].question,
      answer: value
    });
    const newQuestions = [...questions];

    setQuestions(newQuestions);
  };

  useEffect(() => {
    console.log("here");
    setTotal(questions.reduce((acc, val) => acc + val.answer * 1, 0));
  }, [questions]);

  return (
    <div className={`App ${className}`}>
      <h1>Score your daytime sleepiness</h1>
      <p>For each activity, what is your chance of dozing off?</p>
      {questions.map((item, index) => (
        <Buttons
          key={index}
          index={index}
          label={item.question}
          value={item.answer}
          change={saveAnswer}
        />
      ))}
      <div className="done">
        <button
          className={showScore ? "hide" : "show"}
          onClick={() => setShowScore(true)}
        >
          Show my score
        </button>
        <div className={`score ${showScore ? "show" : "hide"}`}>
          <h2>Your average daytime sleepiness is: {total}</h2>
          <ul>
            {results.map((item, index) => (
              <li
                className={total >= item.min && total <= item.max ? "you" : ""}
              >
                <span>{item.range}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const App = styled(AppRaw)`
  h1 {
    line-height: 1.1;
  }
  .Scale {
    margin-bottom: 55px;
  }
  .Scale label {
    margin-bottom: 10px;
  }
  .done {
    margin-bottom: 150px;
  }
  .done ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .done ul li {
    display: grid;
    grid-template-columns: 75px 1fr;
    margin: 0;
    padding: 5px;
  }
  .done ul li span {
    text-align: right;
  }
  .done ul li span + span {
    text-align: left;
    padding-left: 15px;
  }

  .you {
    background: yellow;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  .done button {
    font-size: 2em;
    font-family: "Roboto Slab";
    padding: 25px;
    margin: 0 auto;
    border-radius: 15px;
    border: 4px solid #ccc;
    background: #fff;
    line-height: 1.1;
  }
  .done button:hover {
    cursor: pointer;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
