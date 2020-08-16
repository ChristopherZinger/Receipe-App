import React, { Component } from 'react';
import RecipeSearch from './RecipeSearch/RecipeSearch';
import Recipe from './Recipe/Recipe';
import axios from 'axios';
import './RecipeList.css';



class RecipeList extends Component {
  render(){
    console.log('rendering RecipeList component');
    const recipeExists = (Object.keys(this.props.displayRecipe).length !== 0);
    return(
      <div className="recipeList card">
        <RecipeSearch handleInputChange={this.props.handleInputChange}/>
        {
          !recipeExists ?
          <ul>
            { this.props.recipes.length > 0 ?
              this.props.recipes.map((item, key)=>{
                return <li key={item.id}
                  onClick={this.props.onClickRecipe}>{item.name}</li>
              })
              :
              null
          }
          </ul>
          :
          <Recipe id={this.props.displayRecipe.id} headers={this.props.headers}
            displayRecipe={this.props.displayRecipe} goback={this.props.onClickRecipe}
            />
        }

      </div>
    )
  }
}

export default RecipeList;
