import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>😊</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //const [test, setTest] = useState({ name: "Jhon" });

  function handelPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handelNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      //setStep((s) => s + 1);
    }

    //BAD PRACTICE
    // test.name = "fred";
    //setTest({ name: "Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}> 2</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="fff"
                onCLick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn now
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onCLick={handelPrevious}>
              <span>👈</span> Previous{" "}
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onCLick={handelNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
}

function Button({ textColor, bgColor, onCLick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onCLick}
    >
      {children}
    </button>
  );
}
