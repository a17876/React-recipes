// App.jsx
import React, { useState } from 'react';
import { foods } from '../data'; 

export default function Recipes({ searchWord, setsearchWord , matchingRecipeTitles, setMatchingRecipeTitles}) {

return (
    <>
      {searchWord.length === 0 ? (
        // when the search bar is empty
        foods.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        // show the foods with hightlight when there is result
        matchingRecipeTitles.map((matchingTitle) => {
          const matchingRecipe = foods.find(
            (recipe) => recipe.name.toLowerCase() === matchingTitle.toLowerCase()
          );
          if (matchingRecipe) {
            const highlightedTitle = matchingRecipe.name.replace(
              new RegExp(`(${searchWord})`, 'gi'),
              (match) => `<span style="background-color: yellow;">${match}</span>`
            );
            const highlightedDescription = matchingRecipe.description.replace(
              new RegExp(`(${searchWord})`, 'gi'),
              (match) => `<span style="background-color: yellow;">${match}</span>`
            );
  
            return (
              <div key={matchingRecipe.id}>
                <h2 dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
                <p dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
              </div>
            );
          } else {
            // when there is no result matching
            return (
              <div key={matchingTitle}>
                <p>No matching recipe found for {matchingTitle}</p>
              </div>
            );
          }
        })
      )}
    </>
  );

}

