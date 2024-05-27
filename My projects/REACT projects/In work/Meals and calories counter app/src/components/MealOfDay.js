import { Button } from "./Button";

export function MealOfDay({
  recipe,
  handleDeleteBreakfast,
  quantity,
  handleDeleteLunch,
  handeleDeleteDinner,
}) {
  const recipeDigest = Object.entries(recipe.digest).map(
    ([key, value]) => value
  );

  const recipeFat = recipeDigest[0];
  const recipeCarbs = recipeDigest[1];
  const recipeProtein = recipeDigest[2];

  return (
    <div className="add-meal-container mt-5 col-12">
      <div className=" meals-info-container">
        <h2>{recipe.label}</h2>
        <p>{quantity}g</p>
        <p>
          Calories :{" "}
          {Math.round(
            (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
          )}
        </p>
        <p>
          Fat :{" "}
          {Math.round(
            (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
          )}{" "}
          {recipeFat.unit}
        </p>
        <p>
          Carbs :{" "}
          {Math.round(
            (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
          )}
          {recipeCarbs.unit}
        </p>
        <p>
          Protein :{" "}
          {Math.round(
            (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
          )}
          {recipeProtein.unit}
        </p>
      </div>
      {handleDeleteLunch && (
        <Button
          name="❌"
          className="button-delete-meal"
          onClick={() => handleDeleteLunch(recipe.label, recipe, quantity)}
        />
      )}
      {handleDeleteBreakfast && (
        <Button
          name="❌"
          className="button-delete-meal"
          onClick={() => handleDeleteBreakfast(recipe.label, recipe, quantity)}
        />
      )}
      {handeleDeleteDinner && (
        <Button
          name="❌"
          className="button-delete-meal"
          onClick={() => handeleDeleteDinner(recipe.label, recipe, quantity)}
        />
      )}
    </div>
  );
}
