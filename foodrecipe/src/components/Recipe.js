import React from 'react'
import Ingredient from './Ingredient'

const Recipe = ({recipe})=>{
    return(
        <section>
            <h1>{recipe.label}</h1>
            <img src={recipe.image}></img>
            {console.log(recipe.ingredients)}
            {console.log(recipe.ingredientLines)}
            {recipe.ingredients.map(ingredient=>(
                <Ingredient ingredient={ingredient}/>
            ))}
            <ul>
                {recipe.ingredientLines.map(ingredient=>(
                    <li>{ingredient}</li>
                ))}
            </ul> 
        </section>
    )
}

export default Recipe