import React from "react";
import List from "../List/List";
import LoginPage from "../LoginPage/LoginPage";
import WordCardCarusel from "../WordCardCarusel/WordCardCarusel";

export default function Main() {
  let userLoggedIn = true;
  return (
    <>
      <div>
        <WordCardCarusel />
      </div>
      <div>{userLoggedIn ? <List /> : <LoginPage />}</div>
    </>
  );
}
