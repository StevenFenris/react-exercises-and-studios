
//let recipeData = require('./recipe.json');
import recipeData from "./recipe.json";
export default function recipeImage () {
  let recipePic = recipeData[0].recipeImage
  return (
     <img src={recipePic} alt="recipe image" className=".recipePicture" />
  );
}
 //import json file for the data
 //apply css for className recipeImage
 