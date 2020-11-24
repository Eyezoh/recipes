import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title,image,calories,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image}/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>

                ))}
            </ol>
            
        </div>
    )
}
 
export default Recipe