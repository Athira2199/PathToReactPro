import React from 'react'
import Recipe from './Recipe'

const Recipes = ({recipes})=>{
    return(
        <section>
            {recipes.map(recipe=>(<Recipe recipe={recipe.recipe} />))}
        </section>
    )
    

}

export default Recipes