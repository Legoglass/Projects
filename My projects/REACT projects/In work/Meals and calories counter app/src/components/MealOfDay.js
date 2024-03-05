import { Button } from "./Button";

export function MealOfDay({
  recipe,
  handleDeleteBreakfast,
  quantity,
  handleDeleteLunch,
  handeleDeleteDinner,
}) {
  return (
    <div className="add-meal-container">
      <div>
        <h2>{recipe.label}</h2>
        <p>{quantity}</p>
        <p>
          Calories :{" "}
          {Math.round(
            (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
          )}
        </p>
      </div>
      {handleDeleteLunch && (
        <Button
          name="Delete the meal"
          className="button-87"
          onClick={() => handleDeleteLunch(recipe.label)}
        />
      )}
      {handleDeleteBreakfast && (
        <Button
          name="Delete the meal"
          className="button-87"
          onClick={() => handleDeleteBreakfast(recipe.label)}
        />
      )}
      {handeleDeleteDinner && (
        <Button
          name="Delete the meal"
          className="button-87"
          onClick={() => handeleDeleteDinner(recipe.label)}
        />
      )}
    </div>
  );
}
