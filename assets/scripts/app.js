console.log("[SCRIPT]:: 'app.js' connected.");
const defaultResult = 0;
let currentResult = defaultResult;

//This was refactored to be a separate function since we perform this for each operation.
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//This was refactored since again, we perform this at the end of each operation.
function createAndOutputLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//The math operation template function. (Refactored)
function addToPrevious() {
  //This calls the function for retrieving the user input and converting it to an INT.
  const enteredNumber = getUserNumberInput();

  //Stores the last currentResult.
  const initialResult = currentResult;

  //This performs the math operation for the function.
  currentResult += enteredNumber;

  //This calls the function for outputting the log of the previous number, the operation,
  // and the current number the user input.
  createAndOutputLog("+", initialResult, currentResult)
};

function subtractFromPrevious() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndOutputLog("-", initialResult, currentResult)
};

function multiplyWithPrevious() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndOutputLog("*", initialResult, currentResult)
};

function dividePrevious() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndOutputLog("/", initialResult, currentResult)
};



addBtn.addEventListener("click", addToPrevious);
subtractBtn.addEventListener("click", subtractFromPrevious);
multiplyBtn.addEventListener("click", multiplyWithPrevious);
divideBtn.addEventListener("click", dividePrevious);

/*
This small application is a rich learning experience. It shows that with clever
variable usage and the correct formatting: (`${}`) that you can store small amounts of
older data within variables, thus not requiring an elaborate array or object. This allows
us to store a "log" almost of the values previously inputted as we are updating the
variables to accommodate the new inputs.

The event Listeners are also a quality refresh in paying attention to nuance with
function calls, as we are not calling them when the code is parsed by including
the "()", but simply REFERENCING them with the function name inside of the
event listener.
*/