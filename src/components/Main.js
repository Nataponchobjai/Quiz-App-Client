import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import "../styles/Main.css";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current.value));
    }
  }

  return (
    <div className="container">
      <h1 className="title">Welcome To The Quiz App</h1>
      <div className="image-container">
        <img
          src="/assets/bear.webp"
          alt="Bear Background"
          className="background-image"
        />
      </div>
      <ul className="quiz-instructions">
        <li>You will be asked 10 questions, one after another.</li>
        <li>Each correct answer awards 10 points.</li>
        <li>Each question has three options; choose only one.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The results will be declared at the end of the quiz.</li>
      </ul>

      <form className="username-form">
        <input
          ref={inputRef}
          className="userid-input"
          type="text"
          placeholder="Enter your username"
          aria-label="Username"
        />
        <Link className="start-quiz-btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </form>
    </div>
  );
}
