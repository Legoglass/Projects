import { Recipe } from "./Recipe";

export function RecipesList({
  recipes,
  selectedRecipeId,
  setSelectedRecipeId,
  handleAddBreakfast,
  quantity,
  setQuantity,
  handeleAddDinner,
  handeleAddLunch,
}) {
  function handleRecipeSelect(recipeLabel) {
    setSelectedRecipeId(recipeLabel);
  }

  function handleCloseMoreDetail() {
    setSelectedRecipeId(null);
  }

  return (
    <ul className="container-recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.label}
          recipe={recipe}
          handleRecipeSelect={handleRecipeSelect}
          selectedRecipeId={selectedRecipeId}
          handleCloseMoreDetail={handleCloseMoreDetail}
          handleAddBreakfast={handleAddBreakfast}
          quantity={quantity}
          setQuantity={setQuantity}
          handeleAddDinner={handeleAddDinner}
          handeleAddLunch={handeleAddLunch}
        />
      ))}
    </ul>
  );
}
