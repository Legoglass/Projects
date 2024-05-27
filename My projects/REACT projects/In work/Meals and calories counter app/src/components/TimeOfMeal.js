import { MealOfDay } from "./MealOfDay";

export function TimeOfMeal({
  handleDeleteBreakfast,
  meal,
  recipes,
  handleDeleteLunch,
  handeleDeleteDinner,
}) {
  return (
    <div className="col-md-4 col-12 d-flex flex-column align-items-center">
      <h2 className="mt-5">{meal}</h2>
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
        <div>
          <p>no meal yet</p>
        </div>
      )}
    </div>
  );
}
