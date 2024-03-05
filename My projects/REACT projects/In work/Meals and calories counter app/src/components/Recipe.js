import { Button } from "./Button";
import { MealDetail } from "./MealDetail";

export function Recipe({
  recipe,
  handleRecipeSelect,
  selectedRecipeId,
  handleCloseMoreDetail,
  handleAddBreakfast,
  quantity,
  setQuantity,
  handeleAddDinner,
  handeleAddLunch,
}) {
  return (
    <>
      <li className="recepie-conatiner">
        <div className="first-look">
          <img className="main-image" src={recipe.image} alt={recipe.label} />
          <h2 className="title">{recipe.label}</h2>
        </div>
        <div className="main-information">
          <p>
            Calories :
            {`${Math.round((recipe.calories / recipe.totalWeight) * 100)}`}/100g
          </p>
          <p> Dish Type : {recipe.dishType[0]}</p>
          <p>Cuisine Type : {recipe.cuisineType}</p>
        </div>
        <p className="ingredients">
          {" "}
          <span>The ingredients for the recipe are: </span>
          {`${recipe.ingredientLines.join(" , ")}`}
        </p>
        <Button
          name="More details..."
          className="button-87"
          onClick={() => handleRecipeSelect(recipe.label)}
        />
      </li>
      {selectedRecipeId === recipe.label && (
        <MealDetail
          recipe={recipe}
          handleCloseMoreDetail={handleCloseMoreDetail}
          handleAddBreakfast={handleAddBreakfast}
          quantity={quantity}
          setQuantity={setQuantity}
          handeleAddDinner={handeleAddDinner}
          handeleAddLunch={handeleAddLunch}
        />
      )}
    </>
  );
}
