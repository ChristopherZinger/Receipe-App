import React, {Component} from 'react';
import axios from 'axios';
import './Tags.css';


class Tags extends Component {
  state = {
    inputValue:"",
    tags:[]
  }

  componentDidMount(){
    this.getTags();
  }

  getTags(){
    axios({
      "method":"GET",
      "url":"https://tasty.p.rapidapi.com/tags/list",
      "headers": this.props.headers
      })
      .then((response)=>{
        this.setState({tags:response.data.results})
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  handleInput = e => this.setState({inputValue: e.target.value})


  render=()=>{

    return(
      <div className="tags card">
      <h3>Tags</h3>
      <form>
      <input type='text' value={this.state.inputValue}
        onChange={this.handleInput.bind(this)} className="card"/>
      </form>
      <ul>
        { Array.from(this.state.tags).map((tag, key) => {
          return tag.name.includes(this.state.inputValue) ?
            <li key={key} className="tag"
            onClick={this.props.onClickTag.bind(null, this.state.tags)}
            >{tag.display_name}</li>
            : null
        } )}
      </ul>
      </div>
    )
  }
}

export default Tags;
