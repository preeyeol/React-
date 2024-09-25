const RecipeCard = ({ title, ingredients, instructions }) => {
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>{instructions}</p>
      </div>
    );
  };
  
  export default RecipeCard;