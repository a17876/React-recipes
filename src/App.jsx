// App.jsx
import React from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import { useState } from "react";

export default function App() {
  const [searchWord, setsearchWord] = useState("");
  const [matchingRecipeTitles, setMatchingRecipeTitles] = useState([]);

  return (
    <>
      <Header
        searchWord={searchWord}
        setsearchWord={setsearchWord}
        matchingRecipeTitles={matchingRecipeTitles}
        setMatchingRecipeTitles={setMatchingRecipeTitles}
      />
      <Recipes
        searchWord={searchWord}
        setsearchWord={setsearchWord}
        matchingRecipeTitles={matchingRecipeTitles}
        setMatchingRecipeTitles={setMatchingRecipeTitles}
      />
    </>
  );
}
