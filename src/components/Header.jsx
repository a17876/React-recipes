import { useState } from "react";
import "../App.css";
import React from "react";
import { foods } from "../data";

export default function Header({
  searchWord,
  setsearchWord,
  matchingRecipeTitles,
  setMatchingRecipeTitles,
}) {
  const searchRecipes = (e) => {
    const word = e.target.value;
    setsearchWord(word);
    console.log(searchWord);

    const matchingTitles = foods
      .filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchWord.toLowerCase())
      )
      .map((recipe) => recipe.name);
    setMatchingRecipeTitles(matchingTitles);
    console.log(matchingRecipeTitles);
  };

  const clearSearchBar = () => {
    setsearchWord("");
  };

  return (
    <>
      <h1>Recipes</h1>

      <input
        type="text"
        placeholder={!searchWord ? "Search Recipes" : searchWord}
        value={searchWord}
        onChange={searchRecipes}
      />

      <button onClick={clearSearchBar}>clear</button>
    </>
  );
}
