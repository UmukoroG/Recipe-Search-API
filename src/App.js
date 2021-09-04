import React,{Fragment,useState} from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from './Components/Recipe';

function App() {
  const [search, setSearch]=useState("") 
  const [recipes, setRecipes]=useState([])

  let APP_ID=process.env.REACT_APP_ID;
  let APP_KEY=process.env.REACT_APP_KEY;

  var url=`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}`

  

  async function getRecipes(){
    var result= await Axios.get(url);
    setRecipes(result.data.hits);
    if(result.data.hits==0){
      alert("Invalid: Check your input");
    }
    console.log(result.data)
  
  }


  const onSubmit =(e)=>{
    e.preventDefault();
    getRecipes();

  }

  return (
    <Fragment>

      <div className="app">       
        <h1>Recipe Search API</h1>
        <form onSubmit={onSubmit} className="app_searchForm">
          <input type='text'
          className="app_input" 
          placeholder='search...'
          value={search} onChange={(e)=> setSearch(e.target.value)}
          />

          <input type="submit"
          value="search"
          className='app_submit'
          />

        </form>
        <div className="app_recipes">
          {recipes.map((recipe) =>{
            return <Recipe recipe={recipe}/>;
          })}
           
        </div>


      </div>
  </Fragment>
  );
}

export default App;