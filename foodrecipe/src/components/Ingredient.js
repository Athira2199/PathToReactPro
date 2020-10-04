import React from 'react'

const Ingredient = ({ingredient})=>{
    return(
        <section>
            <span>{ingredient.text}</span>
            <span>{ingredient.weight}</span>
        </section>
    )
}

export default Ingredient