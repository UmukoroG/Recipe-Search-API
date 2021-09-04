import React from 'react'
import './Recipe.css' 

export default function Recipe({recipe}) {
    return (
        
        //if we don't have the image type then don't display it
        recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/)
        !=null &&(
        <div className='recipeTile'>
            <img 
            className="recipeTile_img"
            src={recipe['recipe']['image']} 
            />

            <button className="recipeTile_name"
                onClick={()=>{
                    window.open(recipe['recipe']['url'])
                }}
            >
            <b>{recipe['recipe']['label']}</b>
            </button>

            <p><b>Calories</b>:{recipe['recipe']['calories']}</p>
            
            <p><b>Cusine type</b>:{recipe['recipe']['cuisineType']}</p>
                
        </div>)
    )
}
