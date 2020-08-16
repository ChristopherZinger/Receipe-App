import React, {useEffect} from 'react';
import axios from 'axios';
import './Recipe.css';
const Recipe = props => {

  useEffect(()=>{
    axios({
        "method":"GET",
        "url":"https://tasty.p.rapidapi.com/recipes/detail",
        "headers": props.headers,
        "params":{
        "id":props.id
        }
        })
        .then((response)=>{

        })
        .catch((error)=>{
          console.log(error)
        })
  })

  return(
    <div className="recipe">
      <button onClick={props.goback}> back</button>
      <h3>{props.displayRecipe.name}</h3>
      <p>{props.displayRecipe.description ? props.displayRecipe.description : 'no description'}</p>
      <h4>Steps</h4>
      <ul>
        {props.displayRecipe.instructions.map((item,i)=>{
          return <li key={i}>{i} - {item.display_text}</li>
        })}
      </ul>
      <a href={props.displayRecipe.original_video_url}>original link</a>
      <a href={props.displayRecipe.video_url}>link</a>
      <img  src={props.displayRecipe.thumbnail_url}/>
    </div>
  )
};
export default Recipe;
