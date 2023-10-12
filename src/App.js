import React, { useState } from "react";
import "./styles.css";

const Magic8Ball = () => {
  const answers = [
    "Yes",
    "No",
    "Maybe",
    "Ask\nagain\nlater",
    "Cannot\npredict\nnow",
    "Outlook\nnot so\ngood",
    "Definitely\nnot",
    "Definitely\nyes",
    "I have\nmy doubts",
    "The stars\nsay no",
    "The stars\nsay yes",
    "It is\ncertain"
  ];

  const [answer, setAnswer] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleAskQuestion = () => {
    setIsVisible(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * answers.length);
      const randomAnswer = answers[randomIndex].split("\n").map((line, index) => (
        <div key={index}>{line}</div>
      ));
      setAnswer(randomAnswer);
      setIsVisible(true);
    }, 500);
  };

  return (
    <div className="container">
      <div className={`orb`}>
      <div className={`orb2`}></div>
      <div className={`orb3`}></div>
      <div className={`orb4`}></div>
          <div className={`triangle ${isVisible ? "visible" : ""}`}></div>
          <div className={`text ${isVisible ? "visible" : ""}`} style={{ fontSize: "0.75rem" }}>
          {answer}
        </div>
      </div>
      <button className="button" onClick={handleAskQuestion}>
        Ask a Question
      </button>
    </div>
  );
};

export default Magic8Ball;
