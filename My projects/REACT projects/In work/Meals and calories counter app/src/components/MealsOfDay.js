import { Container, Row } from "react-bootstrap";
import { TimeOfMeal } from "./TimeOfMeal";
import ProgressBar from "@ramonak/react-progress-bar";

export function MealsOfDay({
  handleDeleteBreakfast,
  quantity,
  handleDeleteLunch,
  handeleDeleteDinner,
  day,
  setDay,
  mealsByDay,
  caloriesPerDay,
}) {
  console.log(caloriesPerDay);
  return (
    <>
      <>
        <Container fluid className="my-5">
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <Row className="meals-day">
            <TimeOfMeal
              recipes={mealsByDay[day]?.addToBreakfast || []}
              handleDeleteBreakfast={handleDeleteBreakfast}
              meal={"Breakfast"}
              quantity={quantity}
              mealsByDay={mealsByDay}
              day={day}
            />
            <TimeOfMeal
              recipes={mealsByDay[day]?.addToLunch || []}
              handleDeleteLunch={handleDeleteLunch}
              meal={"Lunch"}
              quantity={quantity}
            />
            <TimeOfMeal
              recipes={mealsByDay[day]?.addToDinner || []}
              handeleDeleteDinner={handeleDeleteDinner}
              meal={"Dinner"}
              quantity={quantity}
            />
          </Row>
        </Container>
      </>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        {" "}
        <>
          <p>Calories :</p>
          <ProgressBar
            completed={mealsByDay[day]?.calories || []}
            maxCompleted={caloriesPerDay}
            bgColor={"#0a1172"}
            baseBgColor={"#17be"}
            className="my-3 col-6 col-lg-2 mx-3"
          />
        </>
        <>
          <p>Protein :</p>
          <ProgressBar
            completed={mealsByDay[day]?.protein || []}
            maxCompleted={150}
            bgColor={"#0a1172"}
            baseBgColor={"#17be"}
            className="my-3 col-6 col-lg-2 mx-3"
          />
        </>
        <>
          <p>Carbs :</p>
          <ProgressBar
            completed={mealsByDay[day]?.carbs || []}
            maxCompleted={150}
            bgColor={"#0a1172"}
            baseBgColor={"#17be"}
            className="my-3 col-6 col-lg-2 mx-3"
          />
        </>
        <>
          <p>Fat :</p>
          <ProgressBar
            completed={mealsByDay[day]?.fat || []}
            maxCompleted={150}
            bgColor={"#0a1172"}
            baseBgColor={"#17be"}
            className="my-3 col-6 col-lg-2 mx-3"
          />
        </>
      </div>
    </>
  );
}
