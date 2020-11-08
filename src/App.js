import React, {useEffect, useState} from "react"; 
import Recipe from './Recipe'; 
import './App.css';


const App = () => {

  const APP_ID = '8c875c7f'; 
  const APP_KEY = "e4655af8ec542324079296f3cf76161c"; 
  
  const [recipes, setRecipes] = useState ([]); 
  const [search, setSearch] = useState(['']); 
  const [query, setQuery] = useState('sandwich'); 

  useEffect(() => {
    getRecipes(); 
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); //starts an HTTP request to this url, asynchronous function is paused until the request completes 
    // once completed, response is assigned with the response object of the request 
    const data = await response.json(); // returns a promise resolved to a JSON object
    setRecipes(data.hits); 
    }; 

  const getSearch = e => {
    e.preventDefault(); 
    setQuery(search); 
    setSearch(''); 
  }

  const updateSearch = e => { 
    setSearch(e.target.value); 
  }

  return ( 
    <div className = "App"> 
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value = {search} onChange={updateSearch} /> 
        <button 
        className = "search-button" 
        typ e = "submit">  
        Search </button> 
      </form>
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients} 
        />
      ))}
    </div>
    )
}

export default App;
