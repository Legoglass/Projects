import { Button } from "./Button";

export function MealDetail({
  recipe,
  handleCloseMoreDetail,
  handleAddBreakfast,
  quantity,
  setQuantity,
  handeleAddDinner,
  handeleAddLunch,
  day,
}) {
  return (
    <div className="button-82">
      <li className="recepie-conatiner-detail">
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
        <p className="ingredients d-none d-sm-block">
          {" "}
          <span>The ingredients for the recipe are: </span>
          {`${recipe.ingredientLines.join(" , ")}`}
        </p>
        <p className="paragraph">Total macronutrients for this meal : </p>
        <ul className="list-meal-details">
          {recipe.digest &&
            Object.entries(recipe.digest).map(([key, value]) => (
              <li key={key + "_unique"}>
                <strong>{value.label}:</strong>{" "}
                {`${Math.round(
                  (value.total / recipe.totalWeight) * (quantity ? quantity : 0)
                )}`}
                {value.unit} / {quantity ? quantity : 0}g
              </li>
            ))}
        </ul>
        <div className="weight-container">
          <p>Enter the quantity :</p>
          <input
            className="weight-counter"
            type="number"
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <p>/g</p>
        </div>
        <Button
          name="close"
          className="button-87"
          onClick={handleCloseMoreDetail}
        />
        <div className="add-to-meal-container">
          <Button
            name="Add to breakfast"
            className="button-87"
            onClick={() => {
              handleAddBreakfast(day, recipe, quantity);
            }}
          />
          <Button
            name="Add to lunch"
            className="button-87"
            onClick={() => handeleAddLunch(day, recipe, quantity)}
          />
          <Button
            name="Add to dinner"
            className="button-87"
            onClick={() => handeleAddDinner(day, recipe, quantity)}
          />
        </div>
      </li>
    </div>
  );
}
