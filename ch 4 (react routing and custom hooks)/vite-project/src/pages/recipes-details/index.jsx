import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const RecipesDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading }= useSWR(`https://dummyjson.com/recipes/${id}`, fetcher);

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="no-data-container">
        <p>No recipe details available.</p>
      </div>
    );
  }

  return (
    <div className="recipe-details-container">
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} width={100} height={100} className="recipe-image" />
      <div className="recipe-meta">
        <p><strong>Cuisine:</strong> {data.cuisine}</p>
        <p><strong>Difficulty:</strong> {data.difficulty}</p>
        <p><strong>Prep Time:</strong> {data.prepTimeMinutes} minutes</p>
        <p><strong>Cook Time:</strong> {data.cookTimeMinutes} minutes</p>
        <p><strong>Servings:</strong> {data.servings}</p>
        <p><strong>Calories per Serving:</strong> {data.caloriesPerServing} kcal</p>
        <p><strong>Rating:</strong> {data.rating} ({data.reviewCount} reviews)</p>
      </div>
      <div className="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-instructions">
        <h2>Instructions</h2>
        <ol>
          {data.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipesDetails;
