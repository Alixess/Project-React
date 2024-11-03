import React from "react";
import List from "../List/List";
import LoginPage from "../LoginPage/LoginPage";
import WordCard from "../WordCard/WordCard";

export default function Main() {
  let userLoggedIn = true;
  return (
    <>
      <div>
        <WordCard />
      </div>
      <div>{userLoggedIn ? <List /> : <LoginPage />}</div>
    </>
  );
}
