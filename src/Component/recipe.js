import React from "react"
import recipecss from "./recipe.css"
const Recipe=({title,calories,image,ingredients})=>{
    return(

   <div class="card" className="card">
  <img class="card-img-top" src={image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">Calories:{calories}</p>
  </div>
  <div>
  <ol class="list-group " className="group">
   {ingredients.map(ingredient=>(<li className="list-group-item">{ingredient}</li>))}
  </ol>
 </div>
 
 
</div>
 )
      
}

export default Recipe;

/*
<div>
<h1>{title}</h1>
<p>{calories}</p>
<ul>
{ingredients.map(ingredient=>(<ol>{ingredient}</ol>))}
</ul>
<img src={image} alt=""/>

</div>
*/