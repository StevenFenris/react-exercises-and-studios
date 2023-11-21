let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];



function RateARecipe(){
  function GiveRating() {
    return <h3>{props<=5?stars[props.rating - 1]:null}</h3>;
    }


  return stars;
  }

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
