import React from 'react';



const RecipeSearch = props =>{
  return(
    <div>
    <h3>Find Recipes</h3>
    <form>
     <input type="text" className="card"
      placeholder="ingredients, dish type, preparation "
      onChange={props.handleInputChange}/>
    </form>
    </div>
  )
}

export default RecipeSearch;
