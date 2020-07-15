import React from 'react';

import './App.css';
import { useEffect } from 'react';
import Axios from 'axios'
import { useState } from 'react';
import Recipe from './Component/recipe';
const App=()=>{
const APP_ID='PASTE APP ID HERE';
const APP_KEY="PASTE APP KEY HERE"
const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]=useState('chicken');
useEffect(()=>{getRecipes();},[query])

const getRecipes=async()=>{
  const {data}=await Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  setRecipes(data.hits);
  console.log(recipes)
} 

const updateSearch=e=>{
  setSearch(e.target.value);

}
const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

return(
    <div className="App">
    <form className="search-form" onSubmit={getSearch}>
    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
    <button className="search-button" type="submit">SEARCH</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe=>(
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} 
      image={recipe.recipe.image}  ingredients={recipe.recipe.ingredientLines}/>))}
    </div>
    </div>
  )
}

export default App;
