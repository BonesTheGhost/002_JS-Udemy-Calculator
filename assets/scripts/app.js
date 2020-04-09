console.log("[SCRIPT]:: 'app.js' connected.");
const defaultResult = 0;

let currentResult = defaultResult;
let calculationDescription = `${currentResult} is an integer`;
let currentResult = addToDefault(defaultNum, userEnteredNum);



outputResult(currentResult, calculationDescription);

addBtn.addEventListener("click", addToPrevious);

function addToPrevious() {
  currentResult = currentResult + userInput.value;
};

/* We modified the addition function to get its values NOT from arguments passed in 
but from a global variable and a user input field. The global variable is then updated
right away so that the value can be passed back out without the need to return it. All
of this is done so that we can manipulate data with vanilla JavaScript and use events
where we cannot simply take data back while we add an event listener.*/ 