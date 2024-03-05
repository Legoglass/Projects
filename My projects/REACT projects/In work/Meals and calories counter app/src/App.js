import { useEffect } from "react";
import "./nav-bar.css";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MealsOfDay } from "./components/MealsOfDay";
import { RecipesList } from "./components/RecipesList";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const KEY = "27bea6725e52580000d2b0ab2f3cb44b";
const id = "3fe93d51";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [addToBreakfast, setAddToBreakfast] = useState([]);
  const [addToDinner, setAddToDinner] = useState([]);
  const [addToLunch, setAddToLunch] = useState([]);
  const [quantity, setQuantity] = useState(100);
  const [changeRoute, setChangeRoute] = useState(false);
  const [mealsByDay, setMealsByDay] = useState([]);
  const [day, setDay] = useState(formatDate(new Date()));
  const navigate = useNavigate();

  useEffect(() => {
    setQuantity(100);
  }, [addToBreakfast, selectedRecipeId]);

  function handleChangeRoute() {
    setChangeRoute(false);
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function handleMealsByDay(day, addToBreakfast, addToLunch, addToDinner) {
    setMealsByDay((mealsByDay) => ({
      ...mealsByDay,
      [day]: {
        addToBreakfast,
        addToLunch,
        addToDinner,
      },
    }));
  }

  useEffect(() => {
    console.log("Mesel sunt", mealsByDay);
  }, [mealsByDay]);

  console.log("Mesele pe aceasta zi sunt :", mealsByDay["2024-03-05"]);
  const mealsForDate = mealsByDay[day];
  const mealsForBr = mealsForDate.addToBreakfast;
  console.log("mMesele : ", mealsForBr);
  console.log("br:", addToBreakfast);
  function handleAddBreakfast(recipe) {
    setAddToBreakfast((addToBreakfast) => [
      ...addToBreakfast,
      { recipe, quantity },
    ]);
    console.log(addToBreakfast);
  }
  function handeleAddDinner(recipe) {
    setAddToDinner((addToDinner) => [...addToDinner, { recipe, quantity }]);
    console.log(addToDinner);
  }
  function handeleAddLunch(recipe) {
    setAddToLunch((addToLunch) => [...addToLunch, { recipe, quantity }]);
    console.log(addToLunch);
  }

  function handleDeleteBreakfast(label) {
    setAddToBreakfast((addToBreakfast) =>
      addToBreakfast.filter((recipe) => recipe.recipe.label !== label)
    );
    console.log(addToBreakfast);
    setSelectedRecipeId(null);
  }
  function handleDeleteLunch(label) {
    setAddToLunch((addToLunch) =>
      addToLunch.filter((recipe) => recipe.recipe.label !== label)
    );
    console.log(addToLunch);
    setSelectedRecipeId(null);
  }
  function handeleDeleteDinner(label) {
    setAddToDinner((addToDinner) =>
      addToDinner.filter((recipe) => recipe.recipe.label !== label)
    );
    console.log(addToDinner);
    setSelectedRecipeId(null);
  }

  useEffect(
    function () {
      async function fetchRecipes() {
        try {
          if (query.length < 4) {
            setRecipes([]);
            setChangeRoute(true);
            return;
          }
          const res = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${KEY}`
          );
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          const data = await res.json();
          const recipesArray = data.hits?.map((hit) => hit.recipe) || [];
          const uniqueRecipesArray = recipesArray.filter(
            (recipe, index, self) =>
              index === self.findIndex((r) => r.label === recipe.label)
          );
          console.log("data type:", typeof data);
          console.log(uniqueRecipesArray);
          setRecipes(uniqueRecipesArray);
        } catch (err) {
          console.log("error:", err);
        }
      }

      fetchRecipes();
    },
    [query]
  );
  useEffect(() => {
    if (query.length >= 4 && changeRoute) {
      navigate("/recipe"); // Schimbă tab-ul către ruta corespunzătoare
      setChangeRoute(true);
    }
  }, [query, navigate, changeRoute]);

  return (
    <>
      <NavBar
        query={query}
        setQuery={setQuery}
        handleChangeRoute={handleChangeRoute}
      />
      <Routes>
        <Route
          path="recipe"
          element={
            <RecipesList
              recipes={recipes}
              selectedRecipeId={selectedRecipeId}
              setSelectedRecipeId={setSelectedRecipeId}
              handleAddBreakfast={handleAddBreakfast}
              quantity={quantity}
              setQuantity={setQuantity}
              handeleAddDinner={handeleAddDinner}
              handeleAddLunch={handeleAddLunch}
            />
          }
        />
        <Route
          path="meals"
          element={
            <MealsOfDay
              recipes={recipes}
              addToBreakfast={addToBreakfast}
              setAddToBreakfast={setAddToBreakfast}
              handleDeleteBreakfast={handleDeleteBreakfast}
              handleDeleteLunch={handleDeleteLunch}
              handeleDeleteDinner={handeleDeleteDinner}
              quantity={quantity}
              addToDinner={addToDinner}
              addToLunch={addToLunch}
              handleMealsByDay={handleMealsByDay}
              day={day}
              setDay={setDay}
              mealsByDay={mealsByDay}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

// API : https://api.edamam.com/search?q=biryani&app_id=3fe93d51&app_key=27bea6725e52580000d2b0ab2f3cb44b

// APi de tipul : {{url}}search?q=biryani&app_id={{app_id}}&app_key={{app_key}}
