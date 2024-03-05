import { MealOfDay } from "./MealOfDay";

export function TimeOfMeal({
  handleDeleteBreakfast,
  meal,
  recipes,
  handleDeleteLunch,
  handeleDeleteDinner,
  mealsByDay,
  day,
}) {
  return (
    <div>
      <h2>{meal}</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.recipe.label}>
            <MealOfDay
              recipe={recipe.recipe}
              handleDeleteLunch={handleDeleteLunch}
              handleDeleteBreakfast={handleDeleteBreakfast}
              handeleDeleteDinner={handeleDeleteDinner}
              quantity={recipe.quantity}
            />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
