import React, { Component }from 'react';
import Tags from './components/Tags/Tags';
import RecipeList from './components/RecipeList/RecipeList';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    headers:{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"tasty.p.rapidapi.com",
      "x-rapidapi-key":"5b8cb30912msh98dc28411920a24p175734jsn4b96333962af",
      "useQueryString":true
    },
    displayRecipe: {},
    recipes:{},
    tag:"",
    query:"",
  }

  handleInputChange=(e)=>{
    const value = e.target.value;
    setTimeout(()=>{
      console.log('tag: ',this.state.tags);
      console.log('query: ',this.state.query);
    },200)

    if(value.length > 3){
      this.setState({ query:value })
      this.getRecipes();
    }

  }

  getRecipes=()=>{
    axios({
      "method":"GET",
      "url":"https://tasty.p.rapidapi.com/recipes/list",
      "headers":this.state.headers,
      "params":{
      "tags":this.state.tag.name,
      "q":this.state.query,
      "from":"0",
      "sizes":"20"
      }
    })
    .then((response)=>{
        this.setState({recipes:response.data.results})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  handleRecipeClick = (e) => {
    console.log('handling recipe click');
    const recipe = e.target.innerHTML
    const recipeObj = this.state.recipes.find(el=> el.name===recipe)
    if(recipeObj === undefined){
      this.setState({ displayRecipe:{} })
      console.log('clear display recipe');
    }else{
      this.setState({ displayRecipe: recipeObj })
    }
  }

  handleTagClick = (tags,e )=>{
    const tag2find =  e.target.innerHTML;
    const newTag = tags.find(el=> el.display_name===tag2find)
    this.setState({tag:newTag});
    this.getRecipes();
  }

  render(){
    return(
      <div className="App">
        <Tags headers={this.state.headers} onClickTag={this.handleTagClick}/>
        <RecipeList tag={this.state.tag} headers={this.state.headers}
           recipes={this.state.recipes} onClickRecipe={this.handleRecipeClick}
           displayRecipe={this.state.displayRecipe}
           handleInputChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default App;
