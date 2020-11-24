import React,{useState,useEffect} from 'react'

import Recipe from './Recipe'
import './App.css';





const App = () => {

const APP_ID = '';
const APP_Key = ''

const [recipes,setRecipes] = useState([]);
const [search,setSearch] =useState('')
const [query,setQuery] = useState('chicken')


useEffect(()=>{
  getRecipies()

},[query])
const getRecipies = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`)
  const data = await response.json()
  setRecipes(data.hits);
  console.log(data.hits)
}
const updateSearch = e =>{
  setSearch(e.target.value)

}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search)
  setSearch('')

}

  return(
    <div className='App'>
      <form onSubmit={getSearch}
      className='search-form'>
      <input type='text' className='search-bar' value={search} onChange={updateSearch}/>
      <button type='submit' className='search-button'>search</button>

      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
        key ={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}  
        />
    
      ))}
        
      </div>
      
    </div>
  )
  
}

export default App;
