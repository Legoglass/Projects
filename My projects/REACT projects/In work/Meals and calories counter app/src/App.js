import { useEffect } from "react";
import "./nav-bar.css";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MealsOfDay } from "./components/MealsOfDay";
import { RecipesList } from "./components/RecipesList";
import { Routes, Route, Navigate, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MobileMenu } from "./components/MobileMenu";
import { Login } from "./components/Login";

const KEY = process.env.REACT_APP_API_KEY;
const id = "3fe93d51";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [addToBreakfast, setAddToBreakfast] = useState([]);
  const [addToDinner, setAddToDinner] = useState([]);
  const [addToLunch, setAddToLunch] = useState([]);
  const [mealsByDay, setMealsByDay] = useState({});
  const [quantity, setQuantity] = useState();
  const [day, setDay] = useState(formatDate(new Date()));
  const [changeRoute, setChangeRoute] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [createAccount, setCreateAccount] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState(false);
  const [caloriesPerDay, setCaloriesPerDay] = useState();

  function CalculateCaloriesPerDay(weight, height, age, gender) {
    let caloriesPerDayCalc;

    if (gender === false) {
      // Verificăm dacă gender este false (presupunând că gender este un boolean)
      caloriesPerDayCalc = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      // Altfel (gender este true sau altceva)
      caloriesPerDayCalc = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return caloriesPerDayCalc;
  }

  const saveCaloriesPerDay = (caloriesPerDayCalc) => {
    setCaloriesPerDay(caloriesPerDayCalc);
  };

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accounts");
    if (storedAccounts) {
      setCreateAccount(JSON.parse(storedAccounts));
    }
  }, []);

  function handeleLogOut() {
    setIsLoggedIn(false);
  }

  function handeleLogin() {
    const storedAccounts = JSON.parse(localStorage.getItem("accounts"));
    const userAccount = Object.values(storedAccounts).find(
      (account) =>
        account.userName === userName && account.password === password
    );

    if (userAccount) {
      setIsLoggedIn(true);
      setErrorMessage("Ești autentificat.");

      // Obține mealsByDay doar pentru utilizatorul autentificat
      const mealsByDayForUser = userAccount.mealsByDay;

      // Actualizează starea locală cu meserii doar pentru utilizatorul autentificat
      if (mealsByDayForUser) {
        setMealsByDay(mealsByDayForUser);
        // Salvează mesele doar dacă nu există deja în localStorage pentru acest utilizator
        const storedMealsByDay = JSON.parse(localStorage.getItem("mealsByDay"));
        if (!storedMealsByDay) {
          localStorage.setItem("mealsByDay", JSON.stringify(mealsByDayForUser));
        }
      }
    } else {
      setIsLoggedIn(false);
      setErrorMessage("Numele de utilizator sau parola este incorectă.");
    }
  }

  function createAccounts(userName, password) {
    if (
      Object.values(createAccount).some(
        (account) => account.userName === userName
      )
    ) {
      setErrorMessage(
        "Numele de utilizator este deja folosit. Te rugăm să alegi alt nume de utilizator."
      );
    } else {
      var id = "id" + Math.random().toString(16).slice(2);
      const newAccount = {
        userName,
        password,
        mealsByDay: {},
      };

      const updateAccounts = {
        ...createAccount,
        [userName]: newAccount,
      };

      setCreateAccount(updateAccounts);
      localStorage.setItem("accounts", JSON.stringify(updateAccounts));

      setUserName("");
      setPassword("");
      setErrorMessage("");
    }
  }

  function savingMealsInAccount(userName, mealsByDay, isLoggedIn) {
    if (isLoggedIn) {
      const storedAccounts = JSON.parse(localStorage.getItem("accounts"));
      if (storedAccounts && storedAccounts[userName]) {
        storedAccounts[userName].mealsByDay = mealsByDay;
        localStorage.setItem("accounts", JSON.stringify(storedAccounts));
        // Salvează starea mealsByDay în localStorage pentru acest utilizator
        localStorage.setItem("mealsByDay", JSON.stringify(mealsByDay));
      } else {
        console.error("Contul nu a fost găsit în localStorage.");
      }
    }
  }

  useEffect(() => {
    savingMealsInAccount(userName, mealsByDay, isLoggedIn);
  }, [userName, mealsByDay, isLoggedIn]);

  useEffect(() => {
    setQuantity(100);
  }, [addToBreakfast, selectedRecipeId]);

  function handleChangeRoute() {
    setChangeRoute(false);
  }

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const storedMealsByDay = localStorage.getItem("mealsByDay");
    if (isLoggedIn) {
      // Încarcă mesele din localStorage doar dacă utilizatorul este autentificat
      const mealsByAccounts = storedMealsByDay
        ? JSON.parse(storedMealsByDay)
        : {};
      setMealsByDay(mealsByAccounts);
    }
  }, [isLoggedIn]); // Se rulează doar la montarea componentei

  function handleMealsByDay(
    setDay,
    addToBreakfast,
    addToLunch,
    addToDinner,
    calories,
    protein,
    carbs,
    fat,
    caloriesPerDay
  ) {
    if (isLoggedIn) {
      // Verifică dacă utilizatorul este autentificat
      setMealsByDay((prevMealsByDay) => {
        const updatedMealsByDay = {
          ...prevMealsByDay,
          [setDay]: {
            addToBreakfast,
            addToLunch,
            addToDinner,
            calories,
            protein,
            carbs,
            fat,
            caloriesPerDay,
          },
        };

        // Salvăm noul mealsByDay în localStorage pentru a-l face persistent
        localStorage.setItem("mealsByDay", JSON.stringify(updatedMealsByDay));

        return updatedMealsByDay;
      });
    }
  }

  function handleAddBreakfast(day, recipe, quantity) {
    const caloriesToAdd = Math.round(
      (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
    );

    const recipeDigest = Object.entries(recipe.digest).map(
      ([key, value]) => value
    );
    const recipeCarbs = recipeDigest[1];
    const recipeFat = recipeDigest[0];
    const recipeProtein = recipeDigest[2];
    const proteinToAdd = Math.round(
      (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const carbsToAdd = Math.round(
      (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const fatToAdd = Math.round(
      (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
    );

    setMealsByDay((prevMealsByDay) => {
      const existingBreakfast =
        prevMealsByDay[day]?.addToBreakfast || addToBreakfast;
      const updatedBreakfast = [...existingBreakfast, { recipe, quantity }];
      const existingCalories = prevMealsByDay[day]?.calories || 0;
      const updatedCalories = existingCalories + caloriesToAdd;
      const existingProtein = prevMealsByDay[day]?.protein || 0;
      const updateProtein = existingProtein + proteinToAdd;
      const existingCarbs = prevMealsByDay[day]?.carbs || 0;
      const updateCarbs = existingCarbs + carbsToAdd;
      const existingFat = prevMealsByDay[day]?.fat || 0;
      const updateFat = existingFat + fatToAdd;
      const existingTotalCalories = caloriesPerDay;

      return {
        ...prevMealsByDay,
        [day]: {
          ...prevMealsByDay[day],
          addToBreakfast: updatedBreakfast,
          calories: updatedCalories,
          protein: updateProtein,
          carbs: updateCarbs,
          fat: updateFat,
          caloriesPerDay: existingTotalCalories,
        },
      };
    });
  }

  function handeleAddDinner(day, recipe, quantity) {
    const caloriesToAdd = Math.round(
      (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const recipeDigest = Object.entries(recipe.digest).map(
      ([key, value]) => value
    );
    const recipeCarbs = recipeDigest[1];
    const recipeFat = recipeDigest[0];
    const recipeProtein = recipeDigest[2];
    const proteinToAdd = Math.round(
      (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const carbsToAdd = Math.round(
      (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const fatToAdd = Math.round(
      (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    setMealsByDay((prevMealsByDay) => {
      // Verificăm dacă există deja o rețetă pentru micul dejun în ziua respectivă
      const existingDinner = prevMealsByDay[day]?.addToDinner || addToDinner;
      // Actualizăm lista de rețete pentru micul dejun, adăugând rețeta nouă
      const updateDinner = [...existingDinner, { recipe, quantity }];
      // Actualizăm starea mealsByDay cu rețeta nouă adăugată pentru micul dejun
      const existingCalories = prevMealsByDay[day]?.calories || 0;
      const updatedCalories = existingCalories + caloriesToAdd;
      const existingProtein = prevMealsByDay[day]?.protein || 0;
      const updateProtein = existingProtein + proteinToAdd;
      const existingCarbs = prevMealsByDay[day]?.carbs || 0;
      const updateCarbs = existingCarbs + carbsToAdd;
      const existingFat = prevMealsByDay[day]?.fat || 0;
      const updateFat = existingFat + fatToAdd;
      const existingTotalCalories = caloriesPerDay;
      return {
        ...prevMealsByDay,
        [day]: {
          ...prevMealsByDay[day],
          addToDinner: updateDinner,
          calories: updatedCalories,
          protein: updateProtein,
          carbs: updateCarbs,
          fat: updateFat,
          caloriesPerDay: existingTotalCalories,
        },
      };
    });
  }

  function handeleAddLunch(day, recipe, quantity) {
    const caloriesToAdd = Math.round(
      (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const recipeDigest = Object.entries(recipe.digest).map(
      ([key, value]) => value
    );
    const recipeCarbs = recipeDigest[1];
    const recipeFat = recipeDigest[0];
    const recipeProtein = recipeDigest[2];
    const proteinToAdd = Math.round(
      (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const carbsToAdd = Math.round(
      (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const fatToAdd = Math.round(
      (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    setMealsByDay((prevMealsByDay) => {
      // Verificăm dacă există deja o rețetă pentru micul dejun în ziua respectivă
      const existingLunch = prevMealsByDay[day]?.addToLunch || addToLunch;
      // Actualizăm lista de rețete pentru micul dejun, adăugând rețeta nouă
      const updateLunch = [...existingLunch, { recipe, quantity }];
      // Actualizăm starea mealsByDay cu rețeta nouă adăugată pentru micul dejun
      const existingCalories = prevMealsByDay[day]?.calories || 0;
      const updatedCalories = existingCalories + caloriesToAdd;
      const existingProtein = prevMealsByDay[day]?.protein || 0;
      const updateProtein = existingProtein + proteinToAdd;
      const existingCarbs = prevMealsByDay[day]?.carbs || 0;
      const updateCarbs = existingCarbs + carbsToAdd;
      const existingFat = prevMealsByDay[day]?.fat || 0;
      const updateFat = existingFat + fatToAdd;
      const existingTotalCalories = caloriesPerDay;
      return {
        ...prevMealsByDay,
        [day]: {
          ...prevMealsByDay[day],
          addToLunch: updateLunch,
          calories: updatedCalories,
          protein: updateProtein,
          carbs: updateCarbs,
          fat: updateFat,
          caloriesPerDay: existingTotalCalories,
        },
      };
    });
  }

  /*function handeleAddLunch(recipe) {
    setAddToLunch((addToLunch) => [...addToLunch, { recipe, quantity }]);
    console.log(addToLunch);
  }*/

  function handleDeleteBreakfast(label, recipe, quantity) {
    const caloriesToDelete = Math.round(
      (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
    );
    
    const recipeDigest = Object.entries(recipe.digest).map(
      ([key, value]) => value
    );
    const recipeProtein = recipeDigest[2];
    const recipeCarbs = recipeDigest[1];
    const recipeFat = recipeDigest[0];
    const proteinToDelete = Math.round(
      (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const carbsToDelete = Math.round(
      (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const fatToDelete = Math.round(
      (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    setMealsByDay((prevMealsByDay) => {
      const updatedBreakfast = (
        prevMealsByDay[day]?.addToBreakfast || []
      ).filter((recipe) => recipe.recipe.label !== label);
      
      const existingCalories = prevMealsByDay[day]?.calories || 0;
      const updatedCalories = existingCalories - caloriesToDelete;
      const existingProtein = prevMealsByDay[day]?.protein || 0;
      const updateProtein = existingProtein - proteinToDelete;
      const existingCarbs = prevMealsByDay[day]?.carbs || 0;
      const updateCarbs = existingCarbs - carbsToDelete;
      const existingFat = prevMealsByDay[day]?.fat || 0;
      const updateFat = existingFat - fatToDelete;
      return {
        ...prevMealsByDay,
        [day]: {
          ...prevMealsByDay[day],
          addToBreakfast: updatedBreakfast,
          calories: updatedCalories,
          protein: updateProtein,
          carbs: updateCarbs,
          fat: updateFat,
        },
      };
    });
    setSelectedRecipeId(null);
  }
  function handleDeleteLunch(label, recipe, quantity) {
    const caloriesToDelete = Math.round(
      (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const recipeDigest = Object.entries(recipe.digest).map(
      ([key, value]) => value
    );
    const recipeProtein = recipeDigest[2];
    const recipeCarbs = recipeDigest[1];
    const recipeFat = recipeDigest[0];
    const proteinToDelete = Math.round(
      (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const carbsToDelete = Math.round(
      (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const fatToDelete = Math.round(
      (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    setMealsByDay((prevMealsByDay) => {
      const updatedLunch = (prevMealsByDay[day]?.addToLunch || []).filter(
        (recipe) => recipe.recipe.label !== label
      );
      const existingCalories = prevMealsByDay[day]?.calories || 0;
      const updatedCalories = existingCalories - caloriesToDelete;
      const existingProtein = prevMealsByDay[day]?.protein || 0;
      const updateProtein = existingProtein - proteinToDelete;
      const existingCarbs = prevMealsByDay[day]?.carbs || 0;
      const updateCarbs = existingCarbs - carbsToDelete;
      const existingFat = prevMealsByDay[day]?.fat || 0;
      const updateFat = existingFat - fatToDelete;
      return {
        ...prevMealsByDay,
        [day]: {
          ...prevMealsByDay[day],
          addToLunch: updatedLunch,
          calories: updatedCalories,
          protein: updateProtein,
          carbs: updateCarbs,
          fat: updateFat,
        },
      };
    });
    setSelectedRecipeId(null);
  }
  function handeleDeleteDinner(label, recipe, quantity) {
    const caloriesToDelete = Math.round(
      (recipe.calories / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const recipeDigest = Object.entries(recipe.digest).map(
      ([key, value]) => value
    );
    const recipeProtein = recipeDigest[2];
    const recipeCarbs = recipeDigest[1];
    const recipeFat = recipeDigest[0];
    const proteinToDelete = Math.round(
      (recipeProtein.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const carbsToDelete = Math.round(
      (recipeCarbs.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    const fatToDelete = Math.round(
      (recipeFat.total / recipe.totalWeight) * 100 * (quantity / 100)
    );
    setMealsByDay((prevMealsByDay) => {
      const updatedDinner = (prevMealsByDay[day]?.addToDinner || []).filter(
        (recipe) => recipe.recipe.label !== label
      );
      const existingCalories = prevMealsByDay[day]?.calories || 0;
      const updatedCalories = existingCalories - caloriesToDelete;
      const existingProtein = prevMealsByDay[day]?.protein || 0;
      const updateProtein = existingProtein - proteinToDelete;
      const existingCarbs = prevMealsByDay[day]?.carbs || 0;
      const updateCarbs = existingCarbs - carbsToDelete;
      const existingFat = prevMealsByDay[day]?.fat || 0;
      const updateFat = existingFat - fatToDelete;
      return {
        ...prevMealsByDay,
        [day]: {
          ...prevMealsByDay[day],
          addToDinner: updatedDinner,
          calories: updatedCalories,
          protein: updateProtein,
          carbs: updateCarbs,
          fat: updateFat,
        },
      };
    });
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
      {mobileMenu ? (
        <NavBar
          query={query}
          setQuery={setQuery}
          handleChangeRoute={handleChangeRoute}
          handleMobileMenu={handleMobileMenu}
          handeleLogOut={handeleLogOut}
          isLoggedIn={isLoggedIn}
        />
      ) : (
        <MobileMenu
          query={query}
          setQuery={setQuery}
          handleChangeRoute={handleChangeRoute}
          handleMobileMenu={handleMobileMenu}
        />
      )}
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/recipe" />
            ) : (
              <Login
                userName={userName}
                password={password}
                setUserName={setUserName}
                setPassword={setPassword}
                createAccounts={createAccounts}
                errorMessage={errorMessage}
                handeleLogin={handeleLogin}
              />
            )
          }
        />
        <Route
          path="recipe"
          element={
            isLoggedIn ? (
              <RecipesList
                recipes={recipes}
                selectedRecipeId={selectedRecipeId}
                setSelectedRecipeId={setSelectedRecipeId}
                handleAddBreakfast={handleAddBreakfast}
                quantity={quantity}
                setQuantity={setQuantity}
                handeleAddDinner={handeleAddDinner}
                handeleAddLunch={handeleAddLunch}
                day={day}
                query={query}
                weight={weight}
                setWeight={setWeight}
                height={height}
                setHeight={setHeight}
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
                caloriesPerDay={caloriesPerDay}
                setCaloriesPerDay={setCaloriesPerDay}
                CalculateCaloriesPerDay={CalculateCaloriesPerDay}
                saveCaloriesPerDay={saveCaloriesPerDay}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="meals"
          element={
            isLoggedIn ? (
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
                day={day}
                setDay={setDay}
                mealsByDay={mealsByDay}
                calories={calories}
                protein={protein}
                caloriesPerDay={caloriesPerDay}
                breakpoints={[
                  "xxxl",
                  "xxl",
                  "xl",
                  "lg",
                  "md",
                  "sm",
                  "xs",
                  "xxs",
                ]}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;

// API : https://api.edamam.com/search?q=biryani&app_id=3fe93d51&app_key=27bea6725e52580000d2b0ab2f3cb44b

// APi de tipul : {{url}}search?q=biryani&app_id={{app_id}}&app_key={{app_key}}
