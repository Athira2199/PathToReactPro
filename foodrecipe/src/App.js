import React,{useState, useEffect} from 'react';
import './App.css';
import Recipes from './components/Recipes'
const App = ()=> {
  const APP_ID = "d939b864"
  const APP_KEY = "de6b3147da200abe7c0723c49d174e98"
  const apiurl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes,setRecipes] = useState([])

  useEffect(()=>{
    getRecipes()
  },[])

  const getRecipes = async()=>{
    const response = await fetch(apiurl)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setRecipes(data.hits)
  }
  return (
    <div className="App">
      <form className="search-form">
        <input 
        className="search-input"
        type="text"
        />
        <button type="submit">Get Recipes</button>
      </form>
      { recipes!=[] ? <Recipes recipes={recipes}/>:false}
    </div>
  );
}

export default App;
