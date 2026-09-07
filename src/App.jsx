import React, { useEffect, useState } from "react";
import "./styles.css";

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
  "It is\ncertain",
];

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length) {
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
}

function Magic8Ball() {
  const [terminalId, setTerminalId] = useState(generateRandomString(7));
  const [answer, setAnswer] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalId(generateRandomString(7));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleAskQuestion = () => {
    if (isShaking) return;

    setIsVisible(false);
    setIsShaking(true);

    setTimeout(() => {
      const randomAnswer =
        answers[Math.floor(Math.random() * answers.length)];

      setAnswer(randomAnswer);
      setIsVisible(true);
      setIsShaking(false);
    }, 650);
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="terminal-label">&gt; {terminalId}</div>
        <h1>8 Ball</h1>
      </header>

      <main className="page-section">
        <div className="eight-ball-area">
          <button
            className={`eight-ball ${isShaking ? "shaking" : ""} ${
              isVisible ? "answered" : ""
            }`}
            onClick={handleAskQuestion}
            aria-label="Ask the 8 Ball"
            type="button"
          >
            <div className="eight-ball-ring">
              <div className="eight-ball-display">
                {isVisible && (
                  <div className="answer">
                    {answer.split("\n").map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      </main>

      <footer className="site-footer">
        <a href="/">Home</a>
      </footer>
    </div>
  );
}

export default Magic8Ball;