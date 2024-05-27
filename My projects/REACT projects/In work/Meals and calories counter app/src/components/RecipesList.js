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
  day,
  query,
  weight,
  setWeight,
  height,
  setHeight,
  age,
  setAge,
  gender,
  setGender,
  caloriesPerDay,
  setCaloriesPerDay,
  CalculateCaloriesPerDay,
  saveCaloriesPerDay,
}) {
  function handleRecipeSelect(recipeLabel) {
    setSelectedRecipeId(recipeLabel);
  }

  function handleCloseMoreDetail() {
    setSelectedRecipeId(null);
  }

  return (
    <>
      {query.length >= 4 ? (
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
              day={day}
            />
          ))}
        </ul>
      ) : (
        <div className="set-gols-container">
          <input
            type="number"
            placeholder="Enter your weight in KG "
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          ></input>
          <input
            type="number"
            placeholder="Enter your height in cm"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          ></input>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          ></input>
          <p>Select your gender : </p>
          <label>
            <input
              type="radio"
              name="gender"
              value="false"
              checked={gender === false}
              onChange={(e) =>
                setGender(e.target.value === "false" ? false : true)
              }
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="true"
              checked={gender === true}
              onChange={(e) =>
                setGender(e.target.value === "true" ? true : false)
              }
            />
            Female
          </label>
          <button
            className="button-87"
            onClick={() => {
              const calculatedCalories = CalculateCaloriesPerDay(
                weight,
                height,
                age,
                gender
              );
              saveCaloriesPerDay(calculatedCalories);
              console.log("Calories per day:", calculatedCalories);
            }}
          >
            Calculate
          </button>
          <p>Caloriile pentru mentinere sunt : {caloriesPerDay}</p>
        </div>
      )}
    </>
  );
}
