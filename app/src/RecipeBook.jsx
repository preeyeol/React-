import RecipeCard from "./RecipeCard";

const RecipeBook=({recipes})=>{
    console.log("hello")
return (
    <div>
{recipes.map((recipe,index)=>(
    <RecipeCard
    key={index}
    title={recipe.title}
    ingredients={recipe.ingredients}
    instructions={recipe.instructions}
    />
))}
 </div>
)

}

export default RecipeBook