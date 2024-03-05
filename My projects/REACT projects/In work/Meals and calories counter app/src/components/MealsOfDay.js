import { Button } from "./Button";
import { TimeOfMeal } from "./TimeOfMeal";

export function MealsOfDay({
  addToLunch,
  addToBreakfast,
  handleDeleteBreakfast,
  quantity,
  addToDinner,
  handleDeleteLunch,
  handeleDeleteDinner,
  handleMealsByDay,
  day,
  setDay,
  mealsByDay,
}) {
  return (
    <>
      <input type="date" value={day} onChange={(e) => setDay(e.target.value)} />
      <div className="meals-day">
        <TimeOfMeal
          recipes={addToBreakfast}
          handleDeleteBreakfast={handleDeleteBreakfast}
          meal={"Breakfast"}
          quantity={quantity}
          mealsByDay={mealsByDay}
          day={day}
        />
        <TimeOfMeal
          recipes={addToLunch}
          handleDeleteLunch={handleDeleteLunch}
          meal={"Lunch"}
          quantity={quantity}
        />
        <TimeOfMeal
          recipes={addToDinner}
          handeleDeleteDinner={handeleDeleteDinner}
          meal={"Dinner"}
          quantity={quantity}
        />
        <Button
          name={"Add Meal"}
          onClick={() =>
            handleMealsByDay(day, addToBreakfast, addToLunch, addToDinner)
          }
        />
      </div>
    </>
  );
}
