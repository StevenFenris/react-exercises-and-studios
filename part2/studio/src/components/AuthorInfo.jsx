import styles from "./styling.css";
import recipeData from "./recipe.json";
//let recipeData = require('~/recipe.json');
export default function AuthorInfo() {

    let authorName = recipeData[0].author;
    let authorPic = recipeData[0].authorImage;
    let authorURL = recipeData[0].website;
   return(
    <div>
    <img src={authorPic} alt = "Author" className={styles.authorPicture}/>
       {authorName}
       {authorURL}
    </div>
   );
};
 
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 